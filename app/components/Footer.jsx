import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-start items-center w-full relative py-10 px-8 mt-16 gap-14"
      style={{ backgroundColor: "#FBEAC3" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 w-full relative gap-20">
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <Image
            src="/images/THB.svg"
            alt="TheHyperbrand Logo"
            width={160}
            height={40}
          />
          <div className="text-sm font-light">
            We create SEO optimized content for your business that will increase
            your search engine rankings and drive more traffic to your website.
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-semibold">Company</div>
          <div className="text-sm font-light cursor-pointer">
            <a href="./privacy-policy">Privacy Policy</a>
          </div>
          <div className="text-sm font-light cursor-pointer">
            <a href="./cancellation-refund">Cancellation and Refund Policy</a>
          </div>
          <div className="text-sm font-light cursor-pointer">
            <a href="./terms-and-conditions">Terms and Conditions</a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-semibold cursor-pointer">Product</div>
          <div className="text-sm font-light cursor-pointer">
            <a href="https://app.thehyperbrand.com/signup">Quick Start</a>
          </div>
          {/* <div className="text-sm font-light cursor-pointer">
            Revenue Calculator
          </div> */}
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-semibold cursor-pointer">Support</div>
          <div className="text-sm font-light cursor-pointer">
            <a href="./contact-us">Contact Us</a>
          </div>
          <div className="text-sm font-light cursor-pointer">
            <a href="#pricingDiv">Pricing</a>
          </div>
        </div>
      </div>
      <div className="text-xs font-light pb-20 lg:pb-0">
        © Designed and Developed By The Hyper Brand
      </div>
    </div>
  );
};

export default Footer;
