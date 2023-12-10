"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HowItWorks = () => {
  const [curView, setCurView] = useState(0);

  return (
    <div
      id="how-it-works"
      className="flex flex-col relative w-full justify-start items-center gap-6 mt-16 lg:mt-32"
    >
      <div className="text-2xl flex justify-center items-start w-full relative pt-10 font-medium">
        How it works?
      </div>
      <div className="text-center text-gray-600 px-6">
        Grow your business with AI-powered content that ranks.
      </div>
      <div className="hidden md:flex justify-around items-start relative sm:gap-10 lg:gap-20 px-10">
        <div className="flex flex-col justify-center items-start w-full relative gap-6 py-10">
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
            <Box
              sx={{
                width: { sm: "356px", lg: "512px" },
                height: { sm: "200px", lg: "300px" },
                position: "relative",
              }}
            >
              <Image
                src="/images/how-it-works/img1.svg"
                fill
                style={{ objectFit: "contain" }}
                alt="why thehyperbrand reason1"
              />
            </Box>
          )}
          {curView === 1 && (
            <Box
              sx={{
                width: { sm: "356px", lg: "512px" },
                height: { sm: "200px", lg: "300px" },
                position: "relative",
              }}
            >
              <Image
                src="/images/how-it-works/img1.svg"
                fill
                style={{ objectFit: "contain" }}
                alt="why thehyperbrand reason2"
              />
            </Box>
          )}
          {curView === 2 && (
            <Box
              sx={{
                width: { sm: "356px", lg: "512px" },
                height: { sm: "200px", lg: "300px" },
                position: "relative",
              }}
            >
              <Image
                src="/images/how-it-works/img1.svg"
                fill
                style={{ objectFit: "contain" }}
                alt="why thehyperbrand reason3"
              />
            </Box>
          )}
          {curView === 3 && (
            <Box
              sx={{
                width: { sm: "356px", lg: "512px" },
                height: { sm: "200px", lg: "300px" },
                position: "relative",
              }}
            >
              <Image
                src="/images/how-it-works/img1.svg"
                fill
                style={{ objectFit: "contain" }}
                alt="why thehyperbrand reason4"
              />
            </Box>
          )}
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className="text-md text-gray-500">
              Discover personalized topic recommendations for your business
            </div>
            <button className="bg-neutral-100 px-4 py-2 rounded-3xl border border-black">
              <a href="https://thb-frontend.azurewebsites.net/signup">
                Get Started <ArrowRightAltIcon />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full relative px-4">
        <div className="flex md:hidden flex-col justify-start items-start w-full relative gap-4">
          <Accordion className="border border-black rounded-md w-full relative">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className="font-semibold w-full relative">
                1. Provide business details
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col justify-start items-center w-full relative">
                <div className="w-full h-52 relative">
                  <Image
                    src="/images/how-it-works/img1.svg"
                    fill
                    style={{ objectFit: "contain" }}
                    alt="why thehyperbrand reason1"
                  />
                </div>
                <div className="text-center text-sm">
                  Discover personalized topic recommendations for your business
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border border-black rounded-md w-full relative">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className="font-semibold w-full relative">
                2. Choose Topic
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col justify-start items-center w-full relative">
                <div className="w-full h-52 relative">
                  <Image
                    src="/images/how-it-works/img1.svg"
                    fill
                    style={{ objectFit: "contain" }}
                    alt="why thehyperbrand reason2"
                  />
                </div>
                <div className="text-center text-sm">
                  Discover personalized topic recommendations for your business
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border border-black rounded-md w-full relative">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className="font-semibold w-full relative">
                3. Publish Blogs
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col justify-start items-center w-full relative">
                <div className="w-full h-52 relative">
                  <Image
                    src="/images/how-it-works/img1.svg"
                    fill
                    style={{ objectFit: "contain" }}
                    alt="why thehyperbrand reason3"
                  />
                </div>
                <div className="text-center text-sm">
                  Discover personalized topic recommendations for your business
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border border-black rounded-md w-full relative">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className="font-semibold w-full relative">
                4. Start getting traffic
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col justify-start items-center w-full relative">
                <div className="w-full h-52 relative">
                  <Image
                    src="/images/how-it-works/img1.svg"
                    fill
                    style={{ objectFit: "contain" }}
                    alt="why thehyperbrand reason4"
                  />
                </div>
                <div className="text-center text-sm">
                  Discover personalized topic recommendations for your business
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
