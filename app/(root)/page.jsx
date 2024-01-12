import Image from "next/image";
import OnboardingForm from "../components/OnboardingForm";
import RevenueEstimator from "../components/RevenueEstimator";
import WhyHyperbrand from "../components/WhyHyperbrand";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import Marquee from "react-fast-marquee";
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Home = () => {
  return (
    <main className="font-manrope">
      <div className="flex flex-col w-full relative">
        <MainHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 md:px-16 lg:px-20 mt-24 lg:mt-40 items-start gap-2">
          <div className="flex flex-col justify-start items-start pt-10 gap-12">
            <div className="flex flex-col justify-start items-start gap-6">
              {/* <div className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-semibold font-manrope">
                {`You don't need to be an`}{" "}
                <span className="text-yellow-400">SEO expert</span>{" "}
                {`to rank higher.`}
              </div> */}
              <div className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-semibold font-manrope">
                <span className="text-yellow-400">Rank high</span> on Google
                with just a few clicks
              </div>
              <div className="text-center lg:text-left text-sm md:text-xl lg:text-xl text-gray-500 font-light">{`We help you do end-to-end SEO without needing any previous experience. Faster, and at throw-away prices.`}</div>
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
          <div className="flex flex-col justify-center items-center relative w-full xl:pl-20 h-full">
            <Image
              src={"/images/home-image.svg"}
              alt="TheHyperbrand Home Image"
              width={500}
              height={500}
            />
            <div className="text-center rounded-md p-2 bg-blue-400 lg:text-left text-sm md:text-lg lg:text-lg text-white font-semibold flex justify-center items-center gap-2">
              <CreditCardIcon color="white" />
              <div>{`No credit card required`}</div>
            </div>
          </div>
          <div className="flex lg:hidden justify-center xl:justify-start items-center w-full relative gap-10 xl:gap-16 mt-8 xl:mt-0">
            <button className="px-4 xl:px-6 py-2 rounded-3xl border text-lg xl:text-xl border-black bg-white hover:bg-gray-100">
              <a
                href="https://calendly.com/thehyperbrand/onboarding"
                target="_blank"
              >
                Book a call
              </a>
            </button>
            <button className="px-4 xl:px-6 py-2 rounded-3xl border text-lg xl:text-xl border-black bg-thbYellow hover:bg-thbDarkYellow">
              <a href="https://app.thehyperbrand.com/signup">Start Now</a>
            </button>
          </div>
        </div>
        <OnboardingForm />
        <div className="flex flex-col justify-start items-center w-full relative gap-4 mt-36">
          <div className="text-2xl font-medium">{`Trusted by the best`}</div>
          {/* <div className="text-center text-gray-500">{`50+ Customer in over 10+ countries grow their business with TheHyperBrand`}</div> */}
          <div className="flex w-full md:w-2/3 relative px-10">
            <Marquee pauseOnHover={true}>
              <div className="flex justify-center items-center w-full relative mt-4 px-10 gap-20">
                <Image
                  src="/images/company-logos/perfora.avif"
                  width={100}
                  height={50}
                  alt="perfora company logo"
                />
                <Image
                  src="/images/company-logos/glomama.avif"
                  width={100}
                  height={50}
                  alt="glomama company logo"
                />
                <Image
                  src="/images/company-logos/kuber.svg"
                  width={100}
                  height={50}
                  alt="kuber company logo"
                />
                <Image
                  src="/images/company-logos/orchid.png"
                  width={100}
                  height={50}
                  alt="orchid lux company logo"
                />
                <Image
                  src="/images/company-logos/velocity.jpeg"
                  width={100}
                  height={50}
                  alt="velocity company logo"
                />
              </div>
            </Marquee>
          </div>
        </div>
        {/* <RevenueEstimator /> */}
        <WhyHyperbrand />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
