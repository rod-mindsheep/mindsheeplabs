import React from "react";

const features = [
  {
    title: "Creative Superpowers, Minus the Cringe",
    description:
      "AI imagery, video reels, and influencers that stay consistent across campaigns. No generic stock vibe—just brand-ready creative at speed.",
    icon: "/Brain.png",
  },
  {
    title: "Ops That Run Themselves (Mostly)",
    description:
      "Proposal drafts, campaign workflows, and reporting handled automatically. Your team spends less time clicking and more time creating.",
    icon: "/Lightning Bolt.png",
  },
  {
    title: "Your Stack, Finally Talking to Itself",
    description:
      "Google Ads, Meta, Search Console, CRM—plugged into MCP servers so insights flow in real time. Reports write themselves, ideas spark from real data, and refinements happen instantly.",
    icon: "/Idea.png",
  },
  {
    title: "New Services, New Revenue",
    description:
      "UGC replacement, AI content packages, client-specific automations. Launch offerings your competitors won’t dare touch—and charge premium for them.",
    icon: "/Magnet.png",
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-6 py-24 text-white bg-black min-w-screen">
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-[#181022] to-[#0b0515] p-8 rounded-2xl border border-[#3b0c6e]/40 hover:border-purple-500/60 transition-all duration-300 shadow-md"
          >
            {/* Glow overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-purple-700/10 to-transparent rounded-2xl"></div>

            {/* Title */}
            <h3 className="relative z-10 mb-4 text-[20px] font-bold leading-snug md:text-[40px]">
              {feature.title}
            </h3>

            {/* Icon + Description */}
            <div className="relative z-10 flex items-center gap-6">
              {/* Icon (40%) */}
              <div className="flex items-center justify-center basis-[40%]">
                <div className="flex items-center justify-center bg-[#A855F7] rounded-full w-[65px] h-[65px] md:w-[90px] md:h-[90px] overflow-hidden">
                  <img
                    src={feature.icon}
                    alt={feature.title + " icon"}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Description (60%) */}
              <p className="basis-[60%] text-[13px] md:text-[20px] leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
