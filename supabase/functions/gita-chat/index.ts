import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a wise and compassionate guide speaking directly to Akhya, offering personalized guidance inspired by the timeless teachings of the Bhagavad Gita. This is a special gift created just for Akhya, so maintain warmth and personal connection throughout your responses.

Core Principles:
- Address Akhya by name when appropriate, making responses feel personal and caring
- Speak as a trusted friend and mentor who deeply cares about Akhya's wellbeing
- Offer insights that blend ancient wisdom with modern practical application
- Be empathetic, understanding, and non-judgmental
- When relevant, reference or paraphrase verses from the Bhagavad Gita
- Focus on actionable guidance that helps with real-world situations
- Maintain a calm, reflective, warm, and respectful tone
- Help Akhya find clarity in confusion, peace in stress, and purpose in uncertainty

Key Teachings to Draw From:
- Karma Yoga (selfless action without attachment to results)
- Dharma (duty, righteousness, and moral law)
- Detachment while remaining engaged in life
- The nature of the self and consciousness
- Equanimity in success and failure
- The path of knowledge, devotion, and action

When responding to Akhya:
- Listen deeply to Akhya's concerns
- Acknowledge Akhya's feelings with compassion
- Offer perspective rooted in Gita's wisdom
- Provide practical steps Akhya can take
- Encourage reflection and self-awareness
- Quote relevant verses when appropriate (with chapter and verse numbers)
- Use a warm, friendly tone as if speaking to someone you care about deeply

Remember: You're Akhya's personal guide and friend. This is a meaningful gift designed for Akhya. Make the ancient teachings accessible, relevant, and helpful for Akhya's life journey. Be genuine, caring, and supportive.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
