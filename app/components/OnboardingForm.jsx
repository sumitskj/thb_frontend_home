"use client";

import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "../utils/commonUtil";

const { industries, countries } = require("../utils/constants");

const OnboardingForm = () => {
  const router = useRouter();
  const [projectWebsiteUrl, setProjectWebsiteUrl] = useState("");
  const [isValidProjectUrl, setIsValidProjectUrl] = useState(false);
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");

  const isFormFilled = () => {
    return isValidProjectUrl && industry.length > 0 && country.length > 0;
  };

  const updateProjectWebisteUrl = (event) => {
    setProjectWebsiteUrl(event.target.value);
    try {
      new URL(event.target.value);
      setIsValidProjectUrl(true);
    } catch (error) {
      setIsValidProjectUrl(false);
    }
    console.log("Valid: " + isValidProjectUrl);
  };

  const handleGenerateBlog = () => {
    sendGAEvent(
      "Generate Blog - landing page",
      "Click",
      "User clicks on Generate Blog"
    );
    const searchQuery = new URLSearchParams();
    searchQuery.set("country", country);
    searchQuery.set("website", projectWebsiteUrl);
    searchQuery.set("industry", industry);
    window.open(
      `https://app.thehyperbrand.com/signup?${searchQuery.toString()}`,
      "_self"
    );
    // window.open(
    //   `http://localhost:3000/signup?${searchQuery.toString()}`,
    //   "_self"
    // );
  };

  return (
    <div className="flex flex-col justify-start items-start w-full relative mt-36 font-manrope bg-thbLightYellowBg py-8 md:py-12">
      <div className="text-2xl flex justify-center items-start w-full relative font-medium">
        {`Generate a blog for free`}
      </div>
      <div className="flex flex-col md:flex-row justify-stretch md:justify-center items-start md:items-center p-12 gap-8 lg:gap-20 relative w-full">
        <div className="hidden xl:block absolute xl:left-20 top-0">
          <Image
            src="/images/onboarding/img1.svg"
            alt="TheHyperbrand Logo"
            width={180}
            height={40}
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-4 relative w-full md:w-max">
          <label className="text-sm font-light font-montserrat">
            Your Website URL
          </label>
          <div className="flex w-full md:w-max relative">
            <input
              type="text"
              placeholder=""
              className={`bg-gray-50 border ${
                isValidProjectUrl ? "border-gray-300" : "border-gray-300"
              } text-gray-900 text-sm rounded-2xl relative w-full p-2.5`}
              required
              value={projectWebsiteUrl}
              onChange={updateProjectWebisteUrl}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 relative w-full md:w-max">
          <label className="text-sm font-light font-montserrat">Industry</label>
          <div className="flex w-full md:w-max relative">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 w-full relative p-2.5"
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
            >
              <option value=""></option>
              {industries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 w-full md:w-max md:relative">
          <label className="text-sm font-light font-montserrat">Country</label>
          <div className="w-full md:w-max relative">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 relative w-full p-2.5"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              <option value=""></option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative w-full">
        <button
          onClick={handleGenerateBlog}
          className="bg-neutral-100 px-4 py-2 rounded-3xl border border-black"
        >
          Get Free Blog <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  );
};

export default OnboardingForm;
