"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const PricingCard = ({ pricing, monthly, setMonthly }) => {
  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg bg-white text-center ${
        pricing.planName === "Business" ? "border border-gray-200" : "border border-gray-200"
      }`}
    >
      {pricing.planName === "Business" && (
        <div className="flex text-xs py-1 justify-center items-center bg-blue-500 text-white">
          Recommended
        </div>
      )}
      {pricing.planName !== "Business" && (
        <div className="flex text-xs py-1 justify-center items-center bg-white text-white"></div>
      )}
      <div className="px-6 py-4">
        <div className="font-semibold mb-2">{pricing.planName}</div>
        <p className="text-black text-xs">
          Best for Small Businesses, Startups and SEO Marketers.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {monthly && (
          <>
            <span className="text-2xl font-semibold">₹{pricing.monthlyPrice}</span>
            <span className="text">/mo</span>
            <p className="text-gray-600 text-sm">(billed monthly)</p>
          </>
        )}
        {/* {!monthly && (
          <>
            <span className="text-4xl font-bold">₹{pricing.annualPrice}</span>
            <span className="text">/year</span>
            <p className="text-gray-600 text-sm">(billed annually)</p>
          </>
        )} */}
        <div className="mt-4 mb-6">
          <button
            onClick={() => setMonthly(true)}
            className={`mx-2 text-gray-800 font-bold py-2 px-4 rounded-full ${
              monthly ? "bg-gray-200 text-black" : "bg-gray-200 text-black"
            }`}
          >
            Monthly
          </button>
          {/* <button
            onClick={() => setMonthly(false)}
            className={`mx-2 font-bold py-2 px-4 rounded-full ${
              monthly === false
                ? "bg-thbBlue text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Annually
          </button> */}
        </div>
      </div>
      <ul className="px-6 text-left">
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-xs">SEO Strategy & Topic Recommendations</div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-xs">Competitor Analysis to stand out</div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-xs">Built-in Keyword Research</div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-xs">Access to Millions of stock images</div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-xs">
              One-click publish to FB, Insta, LinkedIn & X
            </div>
          </div>
        </li>
        <li className="py-1">
          <div className="flex justify-start items-center gap-2">
            <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
            <div className="text-xs">Target 100+ regions and languages</div>
          </div>
        </li>
      </ul>
      <div className="px-6 pt-4 pb-6">
        <button
          onClick={() =>
            window.open("https://app.thehyperbrand.com/signup", "_self")
          }
          className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full w-full font-medium text-sm"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
