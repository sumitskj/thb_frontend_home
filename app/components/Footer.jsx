import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-start items-center w-full relative py-10 px-8 mt-16"
      style={{ backgroundColor: "#FBEAC3" }}
    >
      <div className="grid grid-cols-4 justify-around items-start w-full relative">
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-medium">Company</div>
          <div>About Us</div>
          <div>Pricing</div>
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-medium">Product</div>
          <div>Quick Start</div>
          <div>Revenue Calculator</div>
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-medium">Support</div>
          <div>Quick Start</div>
          <div>Pricing</div>
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <Image
            src="/images/THB.svg"
            alt="TheHyperbrand Logo"
            width={180}
            height={40}
            style={{ filter: "grayscale(100%)" }}
          />
          <div>
            We create SEO optimized content for your business that will increase
            your search engine rankings and drive more traffic to your website.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
