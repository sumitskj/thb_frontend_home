"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HowItWorks = () => {
  const [curView, setCurView] = useState(0);

  return (
    <div id="how-it-works" className="flex flex-col relative w-full justify-start items-center gap-6 mt-32">
      <div className="text-2xl flex justify-center items-start w-full relative pt-10">
        How it works?
      </div>
      <div className="text-center text-gray-600">
        Grow your business with AI-powered content that ranks.
      </div>
      <div className="flex justify-around items-start w-full relative">
        <div className="flex flex-col justify-center items-center w-full relative gap-6 py-10">
          <div
            onClick={() => setCurView(0)}
            className={`${
              curView === 0 ? "border rounded-2xl px-4 py-2 border-black" : ""
            } font-medium cursor-pointer hover:font-semibold text-lg`}
          >
            1. Provide business details{" "}
            {curView === 0 ? <ArrowRightAltIcon /> : ""}
          </div>
          <div
            onClick={() => setCurView(1)}
            className={`${
              curView === 1 ? "border rounded-2xl px-4 py-2 border-black" : ""
            } font-medium cursor-pointer hover:font-semibold text-lg`}
          >
            2. Choose Topic {curView === 1 ? <ArrowRightAltIcon /> : ""}
          </div>
          <div
            onClick={() => setCurView(2)}
            className={`${
              curView === 2 ? "border rounded-2xl px-4 py-2 border-black" : ""
            } font-medium cursor-pointer hover:font-semibold text-lg`}
          >
            3. Publish Blogs {curView === 2 ? <ArrowRightAltIcon /> : ""}
          </div>
          <div
            onClick={() => setCurView(3)}
            className={`${
              curView === 3 ? "border rounded-2xl px-4 py-2 border-black" : ""
            } font-medium cursor-pointer hover:font-semibold text-lg`}
          >
            4. Start getting traffic{" "}
            {curView === 3 ? <ArrowRightAltIcon /> : ""}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full relative gap-4">
          {curView === 0 && (
            <div className="w-3/4">
              <Image
                src="/images/how-it-works/img1.svg"
                layout="responsive"
                width={100}
                height={200}
                alt="why thehyperbrand reason2"
              />
            </div>
          )}
          {curView === 1 && (
            <div className="w-3/4">
              <Image
                src="/images/how-it-works/img1.svg"
                layout="responsive"
                width={100}
                height={200}
                alt="why thehyperbrand reason2"
              />
            </div>
          )}
          {curView === 2 && (
            <div className="w-3/4">
              <Image
                src="/images/how-it-works/img1.svg"
                layout="responsive"
                width={100}
                height={200}
                alt="why thehyperbrand reason2"
              />
            </div>
          )}
          {curView === 3 && (
            <div className="w-3/4">
              <Image
                src="/images/how-it-works/img1.svg"
                layout="responsive"
                width={100}
                height={200}
                alt="why thehyperbrand reason2"
              />
            </div>
          )}
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="text-md text-gray-500">
              Discover personalized topic recommendations for your business
            </div>
            <button className="px-4 xl:px-6 py-2 rounded-3xl border border-black bg-white hover:bg-gray-100">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
