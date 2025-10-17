import React from "react";

const AiMarketingSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden text-white bg-black min-w-screen">
      {/* Top fade from Hero */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,11,81,0.9)_3px,transparent_3px),linear-gradient(to_bottom,rgba(44,11,81,0.9)_3px,transparent_4px)] bg-[size:120px_120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-[25px] md:text-[60px] font-extrabold leading-tight mb-8">
          WHY MOST <span className="">“AI MARKETING”</span> FEELS
          <br /> LIKE LIPSTICK ON A ROBOT.
        </h1>

        <p className="mb-6 text-[15px] md:text-[25px]">
          Everyone’s bragging about their AI stack. But let’s be honest:
        </p>

        <p className="mb-6 text-[15px] md:text-[25px]">
          Stock-looking “AI art” that makes your brand look like everyone else’s.
          <br />
          Bots writing copy that sounds like it was… written by a bot.
          <br />
          A graveyard of half-baked automation tools nobody actually uses.
        </p>

        <p className="mb-10 text-[15px] md:text-[25px]">
          Meanwhile, your team’s stuck waiting weeks for creative, drowning in
          proposal writing, and watching faster competitors eat your lunch.
        </p>

        <p className="text-lg font-bold text-white text-[15px] md:text-[25px]">
          The truth?{" "}
          <span className="">
            AI isn’t a shiny add-on. Done right, it’s the operating system of
            your agency.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AiMarketingSection;
