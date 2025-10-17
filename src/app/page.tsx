import { Navbar02 } from '@/components/ui/navbar-02';
import AiMarketingSection from '@/components/sections/AiMarketingSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import FounderSection from '@/components/sections/FounderSection';
import Footer from '@/components/sections/Footer';
import { MagneticButton } from '@/components/ui/magnetic-button';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans text-white justify-items-center">
      <Navbar02 />
      <main className="relative flex flex-col items-center text-white sm:items-start md:flex md:items-center md:justify-center md:min-h-screen">
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] md:min-h-screen uppercase w-full bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/HERO LOGO.png')",
            backgroundSize: "auto 80%",
            backgroundPosition: "center top",
          }}
        >
          {/* Smooth bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-black"></div>

          <h1 className="max-w-none md:max-w-6xl text-[65px] md:text-[200px] font-bold text-center leading-[100%] md:leading-[80%] mb-6">
            Mindsheep <span className="text-[100px] md:text-[200px]">Labs</span>
          </h1>

          <p className="text-[15px] md:text-[40px] mb-8 font-semibold text-center">
            Helping Agencies Rewire with AI
          </p>

          <a href="">
            <MagneticButton
              className="cursor-pointer font-roboto rounded-sm md:rounded-[15px] h-[28px] md:h-[57px] flex mx-auto justify-center items-center px-8 text-[15px] md:text-[30px] font-semibold md:font-bold uppercase py-5 bg-gradient-to-r from-[#1207D9] to-[#237FFE]"
            >
              Book an Exploratory Call
            </MagneticButton>
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