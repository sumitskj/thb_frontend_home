"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";

const PricingCard = ({ pricing }) => {
  const [monthly, setMonthly] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center border-1 border-gray-200">
      {pricing.id === 2 && (
        <div className="flex text-sm justify-center items-center bg-blue-500 text-white">
          Recommended
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pricing.planName}</div>
        <p className="text-gray-700 text-sm">
          Best for Small Businesses, Startups and SEO Marketers.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {monthly && (
          <>
            <span className="text-4xl font-bold">${pricing.monthlyPrice}</span>
            <span className="text-lg">/mo</span>
            <p className="text-gray-600 text-sm">(billed monthly)</p>
          </>
        )}
        {!monthly && (
          <>
            <span className="text-4xl font-bold">${pricing.annualPrice}</span>
            <span className="text-lg">/year</span>
            <p className="text-gray-600 text-sm">(billed annually)</p>
          </>
        )}
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
            className={`mx-2 font-bold py-2 px-4 rounded-full ${
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
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-sm">SEO Strategy & Topic Recommendations</div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-sm">Competitor Analysis to stand out</div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-sm">Built-in Keyword Research</div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-sm">Access to Millions of stock images</div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-sm">
              One-click publish to FB, Insta, LinkedIn & X
            </div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-sm">Target 100+ regions and languages</div>
          </div>
        </li>
      </ul>
      <div className="px-6 pt-4 pb-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full w-full font-medium">
          <a href="https://thb-frontend.azurewebsites.net/signup">
            Get Started
          </a>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
