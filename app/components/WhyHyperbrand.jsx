/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const WhyHyperbrand = () => {
  return (
    <div className="flex flex-col relative w-full justify-start items-center gap-6 mt-16 md:mt-16">
      <div className="text-2xl flex justify-center items-start w-full relative pt-10 font-medium">
        Why TheHyperBrand ?
      </div>
      <div className="text-center text-gray-600 px-6 text-sm md:text-base">
        Rank high on Google by creating SEO optimized content and high-quality
        backlinks with HyperBrand.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-stretch items-start gap-0 w-full relative lg:max-h-96 mt-6">
        <div
          className="flex flex-col justify-start items-center relative w-full py-4 max-h-full"
          style={{ backgroundColor: "#FCE5C3" }}
        >
          <div className="relative">
            <img
              src="/images/why-hyperbrand/img1.svg"
              alt="why thehyperbrand reason1: Huge Savings"
              className="object-contain h-72 w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-full relative gap-4 h-24">
            <div className="text-lg font-medium">Huge Savings</div>
            <div className="text-sm px-10 text-center font-light text-gray-700">
              {`Like saving money? Save > 80% by working with us as compared to other services.`}
              services.
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center relative w-full py-4 max-h-full"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <div className="relative">
            <img
              src="/images/why-hyperbrand/img2.svg"
              alt="why thehyperbrand reason2: Content"
              className="object-contain h-72 w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-full relative gap-4 h-24">
            <div className="text-lg font-medium">Content</div>
            <div className="text-sm px-10 text-center font-light text-gray-700">
              SEO optimized content. High Quality, Plagiarism Free, and Awesome.
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-between items-center relative w-full py-4 max-h-full"
          style={{ backgroundColor: "#FFFAF0" }}
        >
          <div className="relative">
            <img
              src="/images/why-hyperbrand/img3.svg"
              alt="why thehyperbrand reason3 : Guided Tool"
              className="object-contain h-72 w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-full relative gap-4 h-24">
            <div className="text-lg font-medium">Guided Tool</div>
            <div className="text-sm px-10 text-center font-light text-gray-700">
              You do the work, we bring the expertise. A complete SEO playbook
              at your fingertips.
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center relative w-full py-4 max-h-full"
          style={{ backgroundColor: "#FFF5CF" }}
        >
          <div className="relative">
            <img
              src="/images/why-hyperbrand/img4.svg"
              alt="why thehyperbrand reason3 : Backlinks finder"
              className="object-contain h-72 w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-full relative gap-4 h-24">
            <div className="text-lg font-medium">Backlinks finder</div>
            <div className="text-sm px-10 text-center font-light text-gray-700">
              High quality backlinks. Simplified process. Just a few clicks
              away.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHyperbrand;
