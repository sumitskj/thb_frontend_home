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
      color: 'gray'
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

  return (
    <div id="revenue-estimator"
      className="flex flex-col justify-start items-start w-full relative mt-36 gap-12"
      style={{ backgroundColor: "#F6F6F4" }}
    >
      <div className="text-2xl flex justify-center items-start w-full relative pt-10">
        {`Revenue Estimator`}
      </div>
      <div className="flex justify-center items-center px-40 gap-32 relative w-full">
        <div className="flex flex-col justify-start items-start gap-4 relative w-full">
          <label className="text-sm font-light ">Your Website URL</label>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              className={`bg-gray-50 border ${
                isValidProjectUrl ? "border-gray-300" : "border-gray-300"
              } text-gray-900 text-sm rounded-2xl block w-full p-2.5`}
              required
              value={projectWebsiteUrl}
              onChange={updateProjectWebisteUrl}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-4  relative w-full">
          <label className="text-sm font-light">Country</label>
          <div className="relative">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
        <div className="flex flex-col justify-start items-start relative w-full gap-4">
          <div className="font-light text-sm">Average Buy Value (ABV)</div>
          <div className="flex justify-start items-stretch">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tl-2xl rounded-bl-2xl pl-4">
              <option value="US">$</option>
              <option value="IND">Rs</option>
            </select>
            <input
              value={abv}
              onChange={(event) => setAbv(event.target.value)}
              type="number"
              className="resize border px-3 py-2 w-full rounded-tr-2xl rounded-br-2xl"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full relative gap-32">
        <div className="flex flex-col justify-start item-center relative gap-4">
          <div className="text-md text-center">
            No. of months using TheHyperBrand
          </div>
          <div className="w-full relative">
            <CustomSlider
              aria-label="Custom marks"
              defaultValue={100}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              marks={sliderMarks}
              min={10}
              max={90}
              sx={{ width: "500px", height: "6px" }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start item-center relative bg-yellow-400 px-6 py-4 rounded-lg">
          <div className="text-sm font-semibold">Revenue:</div>
          <div className="text-xl font-bold">$200000</div>
        </div>
      </div>
      <div className="flex justify-center items-center relative w-full pb-10">
        <button className="bg-neutral-100 px-4 py-2 rounded-3xl border border-black">
          Learn More <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  );
};

export default RevenueEstimator;
