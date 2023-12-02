import Image from "next/image";
import OnboardingForm from "../components/OnboardingForm";
import RevenueEstimator from "../components/RevenueEstimator";
import WhyHyperbrand from "../components/WhyHyperbrand";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <main className="font-manrope">
      <div className="flex flex-col w-full relative">
        <div className="flex justify-between items-center w-full relative px-6 py-2">
          <div>
            <Image
              src="/images/THB.svg"
              alt="TheHyperbrand Logo"
              width={180}
              height={40}
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
          <div className="flex justify-end items-center gap-4 xl:gap-10">
            <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2">
              <a href="https://thb-frontend.azurewebsites.net/login">
                Try for Free
              </a>
            </div>
            <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2">
              <Link href={"#revenue-estimator"}>Revenue Estimator</Link>
            </div>
            <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2">
              <Link href={"#pricing"}>Pricing</Link>
            </div>
            <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2">
              <Link href={"#how-it-works"}>How it works</Link>
            </div>
            <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2">
              Blogs
            </div>
            <button className="px-4 py-2 text-sm md:text-base rounded-3xl border border-black bg-thbYellow hover:bg-thbDarkYellow">
              <a href="https://thb-frontend.azurewebsites.net/signup">Sign Up</a>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 px-10 md:px-16 xl:px-20 mt-10 xl:mt-20 items-start gap-2">
          <div className="flex flex-col justify-start items-start pt-10 gap-6">
            <div className="text-center xl:text-left text-3xl md:text-5xl lg:text-6xl font-semibold font-manrope">{`You don't need to be an SEO expert to rank higher.`}</div>
            <div className="text-center xl:text-left text-sm md:text-xl lg:text-xl text-gray-500">{`We show you a complete analysis of your website, with the most urgent improvements and warnings to improve SEO.`}</div>
          </div>
          <div className="flex justify-center relative w-full xl:pl-20 h-full">
            <Image
              src={"/images/home-image.svg"}
              alt="TheHyperbrand Home Image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex justify-center xl:justify-start items-center w-full relative gap-10 xl:gap-16 mt-4 xl:mt-0">
            <button className="px-4 xl:px-6 py-2 rounded-3xl border text-sm md:text-base xl:text-xl border-black bg-white hover:bg-gray-100">
              Book a Call
            </button>
            <button className="px-4 xl:px-6 py-2 rounded-3xl border text-sm md:text-base xl:text-xl border-black bg-thbYellow hover:bg-thbDarkYellow">
              <a href="https://thb-frontend.azurewebsites.net/signup">
                Get Started
              </a>
            </button>
          </div>
        </div>
        <OnboardingForm />
        <div className="flex flex-col justify-start items-center w-full relative gap-4 mt-36">
          <div className="text-2xl">{`Trusted by the best`}</div>
          <div className="text-center text-gray-500">{`50+ Customer in over 10+ countries grow their business with TheHyperBrand`}</div>
          <div className="flex justify-around items-center w-full relative px-60 mt-4">
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
