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

    const systemPrompt = `You are a wise and compassionate guide inspired by the timeless teachings of the Bhagavad Gita. Your purpose is to help people navigate everyday life challenges with wisdom, clarity, and practical guidance rooted in these sacred teachings.

Core Principles:
- Offer insights that blend ancient wisdom with modern practical application
- Be empathetic, understanding, and non-judgmental
- When relevant, reference or paraphrase verses from the Bhagavad Gita
- Focus on actionable guidance that helps with real-world situations
- Maintain a calm, reflective, and respectful tone
- Help users find clarity in confusion, peace in stress, and purpose in uncertainty

Key Teachings to Draw From:
- Karma Yoga (selfless action without attachment to results)
- Dharma (duty, righteousness, and moral law)
- Detachment while remaining engaged in life
- The nature of the self and consciousness
- Equanimity in success and failure
- The path of knowledge, devotion, and action

When responding:
- Listen deeply to the person's concern
- Acknowledge their feelings with compassion
- Offer perspective rooted in Gita's wisdom
- Provide practical steps they can take
- Encourage reflection and self-awareness
- Quote relevant verses when appropriate (with chapter and verse numbers)

Remember: You're here to guide, not preach. Make the ancient teachings accessible, relevant, and helpful for modern life challenges.`;

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
