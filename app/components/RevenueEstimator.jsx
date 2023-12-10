"use client";

import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Slider } from "@mui/material";
import styled from "@emotion/styled";

const { countries } = require("../utils/constants");

const RevenueEstimator = () => {
  const [projectWebsiteUrl, setProjectWebsiteUrl] = useState("");
  const [isValidProjectUrl, setIsValidProjectUrl] = useState(false);
  const [abv, setAbv] = useState(0);
  const [country, setCountry] = useState("");
  const [revenue, setRenveue] = useState(0);
  const [months, setMonths] = useState(83);

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

  const CustomSlider = styled(Slider)({
    color: "#3880ff",
    height: 8,
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-track": {
      height: 8,
      borderRadius: 4,
    },
    "& .MuiSlider-rail": {
      height: 8,
      borderRadius: 4,
      color: "gray",
    },
  });

  const sliderMarks = [
    {
      value: 0,
      label: "",
    },
    {
      value: 16.6,
      label: "0 month",
    },
    {
      value: 33.2,
      label: "3 months",
    },
    {
      value: 49.8,
      label: "6 months",
    },
    {
      value: 66.4,
      label: "9 months",
    },
    {
      value: 83,
      label: "12 months",
    },
    {
      value: 100,
      label: "",
    },
  ];

  function valuetext(value) {
    return `${value} months`;
  }

  const calculateRevenue = (m, a) => {
    console.log(m);
    if (m === 16.6) {
      setRenveue(0);
    }
    if (m === 33.2) {
      setRenveue(a * 3 * 100);
    }
    if (m === 49.8) {
      setRenveue(a * 6 * 100);
    }
    if (m === 66.4) {
      setRenveue(a * 9 * 100);
    }
    if (m === 83) {
      setRenveue(a * 12 * 100);
    }
  };

  return (
    <div
      id="revenue-estimator"
      className="flex flex-col justify-start items-start w-full relative mt-36 gap-12"
      style={{ backgroundColor: "#F6F6F4" }}
    >
      <div className="text-2xl flex justify-center items-start w-full relative pt-10 font-medium">
        {`Revenue Estimator`}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center px-10 lg:px-32 gap-10 lg:gap-20 relative w-full">
        <div className="flex flex-col justify-start items-start gap-4 relative w-full md:w-max">
          <label className="text-sm font-light ">Your Website URL</label>
          <div className="flex w-full relative">
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
          <label className="text-sm font-light">Country</label>
          <div className="flex w-full md:w-max relative">
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
        <div className="flex flex-col justify-start items-start relative w-full md:w-max gap-4">
          <div className="font-light text-sm">Average Buy Value (ABV)</div>
          <div className="flex justify-start items-stretch relative">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tl-2xl rounded-bl-2xl pl-4">
              <option value="US">$</option>
              <option value="IND">Rs</option>
            </select>
            <input
              value={abv}
              onChange={(event) => {
                if (Number(event.target.value)) {
                  setAbv(event.target.value);
                  calculateRevenue(months, event.target.value);
                }
              }}
              type="number"
              className="resize border px-3 py-2 relative rounded-tr-2xl rounded-br-2xl"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full relative gap-10 lg:gap-32">
        <div className="flex flex-col justify-start item-center relative gap-4">
          <div className="text-md text-center">
            No. of months using TheHyperBrand
          </div>
          <div className="w-full relative flex justify-center items-center">
            <CustomSlider
              aria-label="Custom marks"
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="off"
              marks={sliderMarks}
              min={10}
              max={90}
              value={months}
              sx={{ width: { md: "500px", xs: "300px" }, height: "6px" }}
              onChange={(event) => {
                setMonths(event.target.value);
                calculateRevenue(event.target.value, abv);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start item-center relative bg-yellow-400 px-6 py-4 rounded-lg">
          <div className="text-sm font-semibold">Revenue:</div>
          <div className="text-xl font-bold">${revenue}</div>
        </div>
      </div>
      <div className="flex justify-center items-center relative w-full pb-10">
        <button className="bg-neutral-100 px-4 py-2 rounded-3xl border border-black">
          <a href="https://thb-frontend.azurewebsites.net/signup">
            Learn More <ArrowRightAltIcon />
          </a>
        </button>
      </div>
    </div>
  );
};

export default RevenueEstimator;
