import Image from "next/image";

const WhyHyperbrand = () => {
  return (
    <div className="flex flex-col relative w-full justify-start items-center gap-6 mt-32">
      <div className="text-2xl flex justify-center items-start w-full relative pt-10">
        Why TheHyperBrand ?
      </div>
      <div className="text-center text-gray-600">
        We show you a complete analysis of your website, with the most urgent
        improvements and warnings to improve SEO.
      </div>
      <div className="flex justify-stretch items-center gap-0 w-full relative">
        <div className="w-1/4">
          <Image
            src="/images/why-hyperbrand/img1.svg"
            layout="responsive"
            width={100}
            height={200}
            alt="why thehyperbrand reason1"
          />
        </div>
        <div className="w-1/4">
          <Image
            src="/images/why-hyperbrand/img2.svg"
            layout="responsive"
            width={100}
            height={200}
            alt="why thehyperbrand reason2"
          />
        </div>
        <div className="w-1/4">
          <Image
            src="/images/why-hyperbrand/img3.svg"
            layout="responsive"
            width={100}
            height={200}
            alt="why thehyperbrand reason3"
          />
        </div>
        <div className="w-1/4">
          <Image
            src="/images/why-hyperbrand/img4.svg"
            layout="responsive"
            width={100}
            height={200}
            alt="why thehyperbrand reason4"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyHyperbrand;
