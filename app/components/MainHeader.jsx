"use client";

import { useEffect, useState } from "react";

const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import { sendGAEvent } from "../utils/commonUtil";

const MainHeader = () => {
  const [top, setTop] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "Prelogin Homepage", {
          event_category: "Page load",
          event_label: "User lands on homepage",
          location: window.location.pathname,
        });
        console.log("Sending event");
      }
    }, 5000);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const MobileMenuDrawer = ({ openMobileMenu, setOpenMobileMenu }) => {
    return (
      <Drawer
        anchor="right"
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
      >
        <div className="mt-16 flex flex-col justify-start items-center w-full relative px-10 gap-8">
          <div className="flex justify-end w-full relative">
            <div onClick={() => setOpenMobileMenu(false)}>
              <CloseIcon />
            </div>
          </div>
          <button
            onClick={() =>
              sendGAEvent(
                "Book a call - header",
                "Click",
                "User clicks on Book a Call"
              )
            }
            className="px-4 py-2 text-sm md:text-base rounded-3xl border border-black bg-white "
          >
            <a
              href="https://calendly.com/thehyperbrand/onboarding"
              target="_blank"
            >
              Book a call
            </a>
          </button>
          <button
            onClick={() =>
              sendGAEvent("Sign up - header", "Click", "User clicks on Sign up")
            }
            className="px-4 py-2 text-sm md:text-base rounded-3xl border border-black bg-thbYellow"
          >
            <a href="https://app.thehyperbrand.com/signup">Sign In</a>
          </button>
          <div
            onClick={() =>
              sendGAEvent(
                "Try for free - header",
                "Click",
                "User clicks on - try for free"
              )
            }
          >
            <a href="https://app.thehyperbrand.com/signup">Try for Free</a>
          </div>
          {/* <div>Revenue Estimator</div> */}
          <div
            onClick={() =>
              sendGAEvent("Pricing - header", "Click", "User clicks on pricing")
            }
          >
            <Link href={"#pricingDiv"}>Pricing</Link>
          </div>
          <div
            onClick={() =>
              sendGAEvent(
                "How it works - header",
                "Click",
                "User clicks on how it works"
              )
            }
          >
            <Link href={"#how-it-works"}>How it works</Link>
          </div>
          <div
            onClick={() =>
              sendGAEvent("Blog - header", "Click", "User clicks on Blog")
            }
          >
            <a href="https://blog.thehyperbrand.com/" target="_blank">
              Blog
            </a>
          </div>
          <div
            onClick={() =>
              sendGAEvent("Blog - header", "Click", "User clicks on Blog")
            }
          >
            <a href="https://services.thehyperbrand.com/performance-marketing" target="_blank">
              Services
            </a>
          </div>
        </div>
      </Drawer>
    );
  };

  return (
    <>
      <div
        className={`fixed top-0 flex justify-between items-center w-full px-6 py-2 bg-white z-10 ${
          !top && `bg-white shadow-sm`
        }`}
      >
        <div className="hidden md:block p-2">
          <Image
            src="/images/THB.svg"
            alt="TheHyperbrand Logo"
            width={180}
            height={40}
          />
        </div>
        <div className="md:hidden p-2">
          <Image
            src="/images/THB.svg"
            alt="TheHyperbrand Logo"
            width={120}
            height={30}
          />
        </div>
        <div className="flex justify-end items-center gap-4 xl:gap-10">
          <div
            onClick={() =>
              sendGAEvent(
                "Try for free - header",
                "Click",
                "User clicks on - try for free"
              )
            }
            className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow"
          >
            <a href="https://app.thehyperbrand.com/login">Try for Free</a>
          </div>
          {/* <div className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow">
            <Link href={"#revenue-estimator"}>Revenue Estimator</Link>
          </div> */}
          <div
            onClick={() =>
              sendGAEvent("Pricing - header", "Click", "User clicks on pricing")
            }
            className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow"
          >
            <Link href={"#pricingDiv"}>Pricing</Link>
          </div>
          <div
            onClick={() =>
              sendGAEvent(
                "How it works - header",
                "Click",
                "User clicks on how it works"
              )
            }
            className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow"
          >
            <Link href={"#how-it-works"}>How it works</Link>
          </div>
          <div
            onClick={() =>
              sendGAEvent("Blog - header", "Click", "User clicks on Blog")
            }
            className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow"
          >
            <a href="https://blog.thehyperbrand.com/" target="_blank">
              Blog
            </a>
          </div>
          <div
            className="hidden lg:block font-medium text-sm md:text-base cursor-pointer hover:border-b-2 border-thbYellow"
          >
            <a href="https://services.thehyperbrand.com/performance-marketing" target="_blank">
              Services
            </a>
          </div>
          <button
            onClick={() =>
              sendGAEvent(
                "Book a call - header",
                "Click",
                "User clicks on Book a Call"
              )
            }
            className="hidden lg:block px-4 py-2 text-sm md:text-base rounded-3xl border border-black bg-white hover:bg-gray-100"
          >
            <a
              href="https://calendly.com/thehyperbrand/onboarding"
              target="_blank"
            >
              Book a call
            </a>
          </button>
          <button
            onClick={() =>
              sendGAEvent("Sign up - header", "Click", "User clicks on Sign up")
            }
            className="px-4 py-2 text-sm md:text-base rounded-3xl border border-black bg-thbYellow hover:bg-thbDarkYellow"
          >
            <a href="https://app.thehyperbrand.com/signup">Sign In</a>
          </button>
          <div
            onClick={() => setOpenMobileMenu(true)}
            className="lg:hidden cursor-pointer"
          >
            <MenuIcon />
          </div>
          <MobileMenuDrawer
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
          />
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
