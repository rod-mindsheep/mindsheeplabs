import { Navbar02 } from '@/components/ui/navbar-02';
import AiMarketingSection from '@/components/sections/AiMarketingSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import FounderSection from '@/components/sections/FounderSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans text-white justify-items-center">
      <Navbar02 />
      <main className="relative flex flex-col items-center text-white sm:items-start md:flex md:items-center md:justify-center md:min-h-screen">
        <div
          className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] md:min-h-screen uppercase min-w-screen bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/HERO LOGO.png')", backgroundSize: "auto 80%", backgroundPosition: "center top" }}
        >
          {/* Hero gradient glows */}
          {/* <div className
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(97,0,255,0.3),_transparent_70%)] blur-[120px]"></div> */}

          {/* Smooth bottom fade to black */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-black"></div>
          <h1 className="max-w-none md:max-w-6xl order-1 text-[65px] font-bold text-center md:text-center md:text-[200px] leading-[100%] md:leading-[80%] mb-6 self-center">
            Mindsheep <span className="text-[100px] md:text-[200px]">Labs</span>
          </h1>
          <p className="text-[15px] md:text-[40px] mb-2 order-3 absolute bottom-24 md:static md:order-2 font-semibold">
            Helping Agencies Rewire with AI
          </p>
          <a href="" className="cursor-pointer order-2 md:order-3 font-roboto rounded-sm md:rounded-[15px] h-[28px] md:h-[57px] flex mx-auto justify-center items-center mt-4 px-8 text-[15px] md:text-[30px] font-semibold md:font-bold uppercase py-5 bg-gradient-to-r from-[#1207D9] to-[#237FFE]">
            Book an Exploratory Call
          </a>
        </div>

        <AiMarketingSection />
        <FeaturesSection />
        <AboutSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
}