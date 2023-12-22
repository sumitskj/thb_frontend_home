"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";
import { fetchBackendApiWrapper } from "../utils/apiWrapper";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  const [plans, setPlans] = useState(false);

  useEffect(() => {
    initPricing();
  }, []);

  const initPricing = async () => {
    try {
      const res = await fetchBackendApiWrapper(
        "/api/v1/plans",
        {
          method: "GET",
        },
        null
      );
      if (res && res.ok) {
        const data = await res.json();
        setPlans(data);
      }
    } catch (err) {
      console.error("Error in fetching plans: " + JSON.stringify(err));
    }
  };

  return (
    <div id="pricingDiv" className="flex flex-col relative w-full justify-start items-center gap-6 mt-16 md:mt-16">
      <div className="text-2xl flex justify-center items-start w-full relative pt-10 font-medium">
        Pricing
      </div>
      <div className="text-center text-gray-600 px-6 text-sm md:text-base">
        Grow your business with AI-powered content that ranks.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-center w-full relative gap-10 px-10 lg:px-20 py-8">
        {plans &&
          plans.map((p) => {
            return (
              <div
                key={p.id}
                className="flex justify-start items-center w-full relative"
              >
                <PricingCard pricing={p} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pricing;
