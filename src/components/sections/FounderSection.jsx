import React from "react";

const FounderSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden min-w-screen">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 relative z-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex">
          <img
            src={"/founder.jpg"}
            alt="Founder"
            className="rounded-xl object-cover w-full h-full shadow-lg"
          />
          <div className="absolute bottom-3 left-3 bg-purple-700 text-white text-[20px] font-black px-3 py-1 rounded-sm">
            DAVID TAYLOR
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[50px] md:text-3xl font-extrabold mb-6">
            MEET THE FOUNDER
          </h2>

          <p className="text-white font-normal mb-4 text-[20px] leading-relaxed">
            David Taylor has led at the intersection of marketing, technology, and operations
            for nearly two decades. He managed enterprise-scale systems at TPG—Australia’s
            second-largest ISP—before founding his own digital marketing agency in 2016.
            Since then, he’s run campaigns across web, social, Google Ads, and B2B while
            mentoring other agencies on strategy and systems.
          </p>

          <p className="text-white font-normal mb-8 text-[20px] leading-relaxed">
            In 2024, David expanded into AI-powered business automation, helping agencies and
            in-house teams integrate AI into both creative services and operations. His blend
            of enterprise leadership and hands-on marketing expertise makes him the go-to
            guide for agencies ready to evolve.
          </p>

          <button className="w-[212px] uppercase bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 px-6 py-3 rounded-sm font-semibold text-white">
            Join the Lab
          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
