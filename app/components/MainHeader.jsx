"use client";

import { useEffect, useState } from "react";

const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const MainHeader = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <div
        className={`fixed top-0 flex justify-between items-center w-full px-6 py-2 bg-white z-10 ${
          !top && `bg-white shadow-sm`
        }`}
      >
        <div className="p-2">
          <Image
            src="/images/THB.svg"
            alt="TheHyperbrand Logo"
            width={180}
            height={40}
          />
        </div>
        <div className="flex justify-end items-center gap-4 xl:gap-10">
          <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow">
            <a href="https://app.thehyperbrand.com/login">
              Try for Free
            </a>
          </div>
          <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow">
            <Link href={"#revenue-estimator"}>Revenue Estimator</Link>
          </div>
          <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow">
            <Link href={"#pricing"}>Pricing</Link>
          </div>
          <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow">
            <Link href={"#how-it-works"}>How it works</Link>
          </div>
          <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow">
            Blogs
          </div>
          <button className="hidden lg:block px-4 py-2 text-sm md:text-base rounded-3xl border border-black bg-white hover:bg-gray-100">
            <a
              href="https://calendly.com/thehyperbrand/onboarding"
              target="_blank"
            >
              Book a call
            </a>
          </button>
          <button className="px-4 py-2 text-sm md:text-base rounded-3xl border border-black bg-thbYellow hover:bg-thbDarkYellow">
            <a href="https://app.thehyperbrand.com/signup">Sign Up</a>
          </button>
        </div>
      </div>
      <div
        className={`${
          !top ? "fixed lg:hidden" : "hidden"
        } bottom-0 flex justify-center items-center w-full px-6 py-2 bg-thbYellow z-10`}
      >
        <button className="px-4 py-2 text-sm md:text-base rounded-3xl border border-black bg-white hover:bg-thbYellow">
          <a href="https://app.thehyperbrand.com/signup">
            Get a free Blog <ArrowRightAltIcon />
          </a>
        </button>
      </div>
    </>
  );
};

export default MainHeader;
