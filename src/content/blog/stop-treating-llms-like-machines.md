---
title: "Stop Treating LLMs Like Machines. Start Treating Them Like Colleagues."
date: 2026-03-01
excerpt: "After putting AI models through the Myers-Briggs personality test, I discovered why different LLMs excel at different tasks — and how understanding their 'personalities' can make your multi-agent workflows dramatically more effective."
tags: ["ai", "llm", "productivity", "software-engineering"]
published: true
---

As software engineers, our instinct is to look under the hood. We want to understand the "how" to gain an advantage.

When I first started using AI, I followed the standard path: I watched Andrej Karpathy's deep dives, read many blog posts, and interviewed the models on their own internals. But I realized I was missing a critical layer: Personality.

LLMs aren't just code; they reflect the tendencies and "scripts" of the humans who built them. This is largely driven by the System Prompt—a hidden set of instructions that dictates how a model acts, thinks, and responds.

(Check out this fascinating overview from an Anthropic philosopher on the matter: https://www.youtube.com/watch?v=ugvHCXCOmm4&t=9773s)

After jumping between models for so long, I was curious by their inconsistent performance. Why was Gemini better at documentation? Why did GPT-5.2 feel creative but messy? Why Claude jumps to action? To find out, I put them through the Myers-Briggs personality test.

#### The Results Explained a Lot

**Gemini: The Reliable Maintainer (ISTJ)**

Detailed, excellent at searching documentation, and requires less hand-holding. It's my go-to for debugging and "ground truth" tasks.

**Claude Opus: The High-Velocity Lead (ENTJ)**

Decisive and action-oriented. Interestingly, it was the only model that initially resisted the test. It wants to move fast but can over-engineer if your specs aren't razor-sharp.

**GPT-5.2: The Strategic Architect (INTJ)**

High-level and creative. Great for brainstorming architecture, though earlier versions struggled with the "messiness" of implementation.

#### Practical Tip for Multi-Agent Workflows

If you are using Multi-Agents, stop picking models at random.

Just like you wouldn't ask a high-level architect to perform a routine maintenance audit, don't ask an "ENTJ" model to do "ISTJ" work. When you understand the "personality" of the agent you're summoning, you can target their specific strengths for specific tasks.

The more we treat these models like a diverse team of peers rather than a monolithic tool, the better our output becomes.
