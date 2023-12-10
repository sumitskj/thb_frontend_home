import Image from "next/image";
import OnboardingForm from "../components/OnboardingForm";
import RevenueEstimator from "../components/RevenueEstimator";
import WhyHyperbrand from "../components/WhyHyperbrand";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <main className="font-manrope">
      <div className="flex flex-col w-full relative">
        <MainHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 md:px-16 lg:px-20 mt-24 lg:mt-40 items-start gap-2">
          <div className="flex flex-col justify-start items-start pt-10 gap-12">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-semibold font-manrope">
                {`You don't need to be an`}{" "}
                <span className="text-yellow-400">SEO expert</span>{" "}
                {`to rank higher.`}
              </div>
              <div className="text-center lg:text-left text-sm md:text-xl lg:text-xl text-gray-500 font-light">{`We show you a complete analysis of your website, with the most urgent improvements and warnings to improve SEO.`}</div>
            </div>
            <div className="hidden lg:flex justify-stretch lg:justify-start items-center w-full relative gap-10 lg:gap-16 mt-4 lg:mt-0">
              <button className="px-4 lg:px-8 py-2 rounded-3xl border text-sm md:text-base lg:text-xl font-light border-black bg-white hover:bg-gray-100">
                <a
                  href="https://calendly.com/thehyperbrand/onboarding"
                  target="_blank"
                >
                  Book a call
                </a>
              </button>
              <button className="px-6 lg:px-8 py-2 rounded-3xl border text-sm md:text-base lg:text-xl font-light border-black bg-thbYellow hover:bg-thbDarkYellow">
                <a href="https://app.thehyperbrand.com/signup">Get Started</a>
              </button>
            </div>
          </div>
          <div className="flex justify-center relative w-full xl:pl-20 h-full">
            <Image
              src={"/images/home-image.svg"}
              alt="TheHyperbrand Home Image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex lg:hidden justify-center xl:justify-start items-center w-full relative gap-10 xl:gap-16 mt-4 xl:mt-0">
            <button className="px-4 xl:px-6 py-2 rounded-3xl border text-lg xl:text-xl border-black bg-white hover:bg-gray-100">
              Book a Call
            </button>
            <button className="px-4 xl:px-6 py-2 rounded-3xl border text-lg xl:text-xl border-black bg-thbYellow hover:bg-thbDarkYellow">
              <a href="https://app.thehyperbrand.com/signup">Get Started</a>
            </button>
          </div>
        </div>
        <OnboardingForm />
        <div className="flex flex-col justify-start items-center w-full relative gap-4 mt-36">
          <div className="text-2xl font-medium">{`Trusted by the best`}</div>
          <div className="text-center text-gray-500">{`50+ Customer in over 10+ countries grow their business with TheHyperBrand`}</div>
          <div className="flex w-full md:w-1/2 relative px-10">
            <Marquee pauseOnHover={true}>
              <div className="flex justify-center items-center w-full relative mt-4 px-10 gap-20">
                <Image
                  src="/images/company-logos/eventbrite.svg"
                  width={100}
                  height={50}
                  alt="eventbrite company logo"
                />
                <Image
                  src="/images/company-logos/doordash.svg"
                  width={100}
                  height={50}
                  alt="doordash company logo"
                />
                <Image
                  src="/images/company-logos/reddit.svg"
                  width={100}
                  height={50}
                  alt="reddit company logo"
                />
                <Image
                  src="/images/company-logos/trello.svg"
                  width={100}
                  height={50}
                  alt="trello company logo"
                />
              </div>
            </Marquee>
          </div>
        </div>
        <RevenueEstimator />
        <WhyHyperbrand />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
