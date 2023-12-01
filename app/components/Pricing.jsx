"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";

const Pricing = () => {
  const PricingRecommendedCard = () => {
    const [monthly, setMonthly] = useState(false);

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center border-2 border-blue-500">
        <div className="flex justify-center items-center bg-blue-500 text-white">
          Recommended
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Professional</div>
          <p className="text-gray-700 text-base">
            Best for Small Businesses, Startups and SEO Marketers.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="text-4xl font-bold">$49</span>
          <span className="text-lg">/mo</span>
          <p className="text-gray-600 text-sm">(billed annually)</p>
          <div className="mt-4 mb-6">
            <button
              onClick={() => setMonthly(true)}
              className={`mx-2 text-gray-800 font-bold py-2 px-4 rounded-full ${
                monthly ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setMonthly(false)}
              className={`mx-2  text-white font-bold py-2 px-4 rounded-full ${
                monthly === false
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Annually
            </button>
          </div>
        </div>
        <ul className="px-6 text-left">
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>SEO Strategy & Topic Recommendations</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>Competitor Analysis to stand out</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>Built-in Keyword Research</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>Access to Millions of stock images</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>One-click publish to FB, Insta, LinkedIn & X</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>Target 100+ regions and languages</div>
            </div>
          </li>
        </ul>
        <div className="px-6 pt-4 pb-6">
          <button className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full w-full">
            <a href="https://thb-frontend.azurewebsites.net/signup">
              Get Started
            </a>
          </button>
        </div>
      </div>
    );
  };

  const PricingNormalCard = () => {
    const [monthly, setMonthly] = useState(false);

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center border-2">
        <div className="px-6 py-4 mt-4">
          <div className="font-bold text-xl mb-2">Enterprise</div>
          <p className="text-gray-700 text-base">
            Best for Small Businesses, Startups and SEO Marketers.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="text-4xl font-bold">$79</span>
          <span className="text-lg">/mo</span>
          <p className="text-gray-600 text-sm">(billed annually)</p>
          <div className="mt-4 mb-6">
            <button
              onClick={() => setMonthly(true)}
              className={`mx-2 text-gray-800 font-bold py-2 px-4 rounded-full ${
                monthly ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setMonthly(false)}
              className={`mx-2  text-white font-bold py-2 px-4 rounded-full ${
                monthly === false
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Annually
            </button>
          </div>
        </div>
        <ul className="px-6 text-left">
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>SEO Strategy & Topic Recommendations</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>Competitor Analysis to stand out</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>Built-in Keyword Research</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>Access to Millions of stock images</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>One-click publish to FB, Insta, LinkedIn & X</div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex justify-start items-center gap-2">
              <CheckCircleOutlineIcon sx={{ fontSize: "1.2rem" }} />
              <div>Target 100+ regions and languages</div>
            </div>
          </li>
        </ul>
        <div className="px-6 pt-4 pb-6">
          <button className="bg-white hover:bg-gray-100 py-2 px-4 rounded-full w-full border border-black">
            <a href="https://thb-frontend.azurewebsites.net/signup">
              Get Started
            </a>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      id="pricing"
      className="flex flex-col relative w-full justify-start items-center gap-6 mt-32"
    >
      <div className="text-2xl flex justify-center items-start w-full relative pt-10">
        Pricing
      </div>
      <div className="text-center text-gray-600">
        Grow your business with AI-powered content that ranks.
      </div>
      <div className="flex justify-center items-start w-full relative gap-20 mt-6">
        <PricingRecommendedCard />
        <PricingNormalCard />
      </div>
    </div>
  );
};

export default Pricing;
