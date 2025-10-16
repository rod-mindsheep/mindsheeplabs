import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden min-w-screen">
      {/* background gradient bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-[40px] font-bold tracking-wider text-white uppercase mb-6">
          About Us
        </h2>

        <div className="bg-gradient-to-b from-[#1a1027] to-[#0b0515] border border-purple-800/30 rounded-xl p-10 shadow-lg w-full">
          <h3 className="text-[30px] md:text-[50px] font-extrabold mb-6 leading-snug">
            We’re not an agency. We’re a mutation lab <br className="hidden md:block" /> for agencies.
          </h3>

          <p className="text-white mb-6 leading-relaxed">
            We’re explorers. Tinkerers. Sheep gone feral. We work with marketing teams and agencies
            that aren’t afraid to rip up the old playbook and write a new one—before everyone else
            catches on.
          </p>

          <p className="text-white mb-6 leading-relaxed">
            We don’t do “done-for-you” magic tricks. We partner with you to figure out:
          </p>

          <ul className="text-white list-disc list-inside mb-6 space-y-2">
            <li>What should be automated vs. what needs the human touch.</li>
            <li>Where AI adds ROI today—not five years from now.</li>
            <li>
              How to sell new AI-powered services to your clients without looking like a gimmick.
            </li>
          </ul>

          <p className="text-white mb-8 leading-relaxed">
            The only question: Do you want to be the first, or wait until it’s boring?
          </p>

          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 px-6 py-3 rounded-md font-semibold text-white">
            Book an Exploratory Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
