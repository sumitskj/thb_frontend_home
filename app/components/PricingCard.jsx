"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const PricingCard = ({ pricing, monthly, setMonthly }) => {
  return (
    <div
      className={`w-full h-[640px] rounded-lg overflow-hidden bg-white flex flex-col justify-between items-start text-center ${
        pricing.recommended
          ? "border border-gray-200"
          : "border border-gray-200"
      }`}
    >
      {pricing.planName !== "Service" && (
        <div className="flex flex-col justify-start items-start w-full relative gap-4">
          {pricing.recommended && (
            <div className="flex text-xs py-2 justify-center items-center bg-[#0C8CE9] text-white w-full">
              Recommended
            </div>
          )}
          {!pricing.recommended && (
            <div className="flex text-xs py-1 justify-center items-center text-white w-full"></div>
          )}
          <div className="bg-red-500 text-white text-xs p-2 rounded-md shadow-md uppercase font-bold absolute right-2 -top-1">
            {pricing.monthlyDiscountPercentage}% Off
          </div>
          {!pricing.recommended && (
            <div className="flex text-xs py-1 justify-center items-center bg-white text-white"></div>
          )}
          <div className="px-6 py-4 w-full text-center">
            <div className="font-semibold mb-2">{pricing.planName}</div>
            <p className="text-black text-xs">{pricing.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2 w-full text-center">
            {monthly && (
              <div className="w-full relative">
                <div className="text-3xl font-semibold text-gray-300 gap-2">
                  <s className="decoration-2">
                    ₹{pricing.strikeOffMonthlyPrice}
                  </s>
                  <span className="text-3xl font-semibold text-black">
                    <span>{"   "}</span>₹{pricing.monthlyPrice}
                  </span>
                  {/* <span className="text-sm font-light text-black">/mo</span> */}
                </div>
                {/* <p className="text-gray-600 text-sm">(billed monthly)</p> */}
              </div>
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
          <div className="px-6 pb-6 w-full text-center">
            <button
              onClick={() =>
                window.open("https://app.thehyperbrand.com/signup", "_self")
              }
              className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full w-full font-medium text-sm"
            >
              Get Started
            </button>
          </div>
          <ul className="px-6 text-left">
            {pricing &&
              pricing.features &&
              pricing.features.length > 0 &&
              pricing.features.map((pl, ind) => {
                return (
                  <li key={ind} className="py-1">
                    <div className="flex justify-start items-start gap-2">
                      <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
                      <div className="text-sm">{pl}</div>
                    </div>
                  </li>
                );
              })}
            {/* <li className="py-1">
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
        </li> */}
          </ul>
        </div>
      )}
      {pricing.planName === "Service" && (
        <div className="flex flex-col justify-start items-start w-full relative gap-4">
          {!pricing.recommended && (
            <div className="flex text-xs py-1 justify-center items-center bg-white text-white"></div>
          )}
          <div className="flex text-xs py-1 justify-center items-center text-white w-full"></div>
          <div className="px-6 py-4 w-full text-center">
            <div className="font-semibold mb-2">{pricing.planName}</div>
            <p className="text-black text-xs">{pricing.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2 w-full text-center">
            {monthly && (
              <div className="w-full relative">
                <div className="text-3xl font-semibold text-gray-300 gap-2">
                  <span className="text-3xl font-semibold text-gray-400">
                    Custom
                  </span>
                  {/* <span className="text-sm font-light text-black">/mo</span> */}
                </div>
                {/* <p className="text-gray-600 text-sm">(billed monthly)</p> */}
                <div className="mt-4 mb-6">
                  <div className="h-10"></div>
                </div>
              </div>
            )}
          </div>
          <div className="px-6 pb-6 w-full text-center">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919818090406",
                  "_blank"
                )
              }
              className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full w-full font-medium text-sm"
            >
              Get Started
            </button>
          </div>
          <ul className="px-6 text-left">
            {pricing &&
              pricing.features &&
              pricing.features.length > 0 &&
              pricing.features.map((pl, ind) => {
                return (
                  <li key={ind} className="py-1">
                    <div className="flex justify-start items-start gap-2">
                      <CheckCircleOutlineIcon sx={{ fontSize: "1rem" }} />
                      <div className="text-sm">{pl}</div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
