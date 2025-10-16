import React from "react";
import { Brain, Zap, Lightbulb, Magnet } from "lucide-react"; // lucide-react for icons

const features = [
  {
    title: "Creative Superpowers, Minus the Cringe",
    description:
      "AI imagery, video reels, and influencers that stay consistent across campaigns. No generic stock vibe—just brand-ready creative at speed.",
    icon: <Brain className="w-8 h-8 text-white" />,
  },
  {
    title: "Ops That Run Themselves (Mostly)",
    description:
      "Proposal drafts, campaign workflows, and reporting handled automatically. Your team spends less time clicking and more time creating.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "Your Stack, Finally Talking to Itself",
    description:
      "Google Ads, Meta, Search Console, CRM—plugged into MCP servers so insights flow in real time. Reports write themselves, ideas spark from real data, and refinements happen instantly.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
  },
  {
    title: "New Services, New Revenue",
    description:
      "UGC replacement, AI content packages, client-specific automations. Launch offerings your competitors won’t dare touch—and charge premium for them.",
    icon: <Magnet className="w-8 h-8 text-white" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 min-w-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-[#181022] to-[#0b0515] rounded-2xl p-8 shadow-lg border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-500/5 to-transparent rounded-2xl pointer-events-none" />
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 bg-purple-600 rounded-full p-3 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
