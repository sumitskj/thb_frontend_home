import Image from "next/image";
import { sendGAEvent } from "../utils/commonUtil";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-start items-center w-full relative py-10 px-8 mt-16 gap-6"
      style={{ backgroundColor: "#FBEAC3" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 w-full relative gap-20">
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <a href="https://guidekaka.com/one-day-trip-from-bangalore-exciting-destinations/">
            <Image
              src="/images/THB.svg"
              alt="TheHyperbrand Logo"
              width={160}
              height={40}
            />
          </a>
          <div className="text-sm font-light">
            We create SEO optimized content for your business that will increase
            your search engine rankings and drive more traffic to your website.
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-semibold">Company</div>
          <div
            onClick={() =>
              sendGAEvent(
                "Privacy Policy",
                "Click",
                "User clicks on Privacy Policy"
              )
            }
            className="text-sm font-light cursor-pointer"
          >
            <a href="./privacy-policy">Privacy Policy</a>
          </div>
          <div
            onClick={() =>
              sendGAEvent(
                "Cancellation and Refund Policy",
                "Click",
                "User clicks on Cancellation and Refund Policy"
              )
            }
            className="text-sm font-light cursor-pointer"
          >
            <a href="./cancellation-refund">Cancellation and Refund Policy</a>
          </div>
          <div
            onClick={() =>
              sendGAEvent(
                "Terms and Conditions",
                "Click",
                "User clicks on Terms and Conditions"
              )
            }
            className="text-sm font-light cursor-pointer"
          >
            <a href="./terms-and-conditions">Terms and Conditions</a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-semibold cursor-pointer">Product</div>
          <div
            onClick={() =>
              sendGAEvent(
                "Quick Start Footer",
                "Click",
                "User clicks on Quick Start"
              )
            }
            className="text-sm font-light cursor-pointer"
          >
            <a href="https://app.thehyperbrand.com/signup">Quick Start</a>
          </div>
          {/* <div className="text-sm font-light cursor-pointer">
            Revenue Calculator
          </div> */}
        </div>
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
          <div className="font-semibold cursor-pointer">Support</div>
          <div
            onClick={() =>
              sendGAEvent(
                "Contact Us Footer",
                "Click",
                "User clicks on Contact Us"
              )
            }
            className="text-sm font-light cursor-pointer"
          >
            <a href="./contact-us">Contact Us</a>
          </div>
          <div
            onClick={() =>
              sendGAEvent("Pricing Footer", "Click", "User clicks on Pricing")
            }
            className="text-sm font-light cursor-pointer"
          >
            <a href="#pricingDiv">Pricing</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full text-xs">
        Follow us
      </div>
      <div className="flex justify-center items-center w-full relative gap-6">
        <div
          onClick={() => sendGAEvent("X Footer", "Click", "User clicks on X")}
          className="cursor-pointer"
        >
          <a
            href="https://twitter.com/_thehyperbrand?t=2_rTY-z4OI1FK5U-AOe8UQ&s=09"
            target="_blank"
          >
            <svg
              className={`w-6 h-6 text-black`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
              />
            </svg>
          </a>
        </div>
        <div
          onClick={() =>
            sendGAEvent("Instagram Footer", "Click", "User clicks on Instagram")
          }
          className="cursor-pointer"
        >
          <a
            href="https://www.instagram.com/_thehyperbrand?igsh=amxzM3lpemx3bXYx"
            target="_blank"
          >
            <svg
              className={`w-6 h-6 text-black`}
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0C7.28333 0 6.94417 0.0125 5.8775 0.06C4.8125 0.11 4.0875 0.2775 3.45 0.525C2.7925 0.78 2.23417 1.1225 1.67833 1.67833C1.1225 2.23417 0.779167 2.79167 0.525 3.45C0.2775 4.0875 0.109167 4.8125 0.06 5.8775C0.01 6.94417 0 7.28333 0 10C0 12.7167 0.0125 13.0558 0.06 14.1225C0.11 15.1867 0.2775 15.9125 0.525 16.55C0.78 17.2067 1.1225 17.7658 1.67833 18.3217C2.23417 18.8767 2.79167 19.2208 3.45 19.475C4.08833 19.7217 4.81333 19.8908 5.8775 19.94C6.94417 19.99 7.28333 20 10 20C12.7167 20 13.0558 19.9875 14.1225 19.94C15.1867 19.89 15.9125 19.7217 16.55 19.475C17.2067 19.22 17.7658 18.8767 18.3217 18.3217C18.8767 17.7658 19.2208 17.2092 19.475 16.55C19.7217 15.9125 19.8908 15.1867 19.94 14.1225C19.99 13.0558 20 12.7167 20 10C20 7.28333 19.9875 6.94417 19.94 5.8775C19.89 4.81333 19.7217 4.08667 19.475 3.45C19.22 2.7925 18.8767 2.23417 18.3217 1.67833C17.7658 1.1225 17.2092 0.779167 16.55 0.525C15.9125 0.2775 15.1867 0.109167 14.1225 0.06C13.0558 0.01 12.7167 0 10 0ZM10 1.8C12.6692 1.8 12.9875 1.81333 14.0417 1.85917C15.0167 1.905 15.5458 2.06667 15.8975 2.205C16.3658 2.38583 16.6975 2.6025 17.0492 2.95167C17.3983 3.30167 17.615 3.63417 17.7958 4.1025C17.9325 4.45417 18.0958 4.98333 18.14 5.95833C18.1875 7.01333 18.1983 7.33 18.1983 10C18.1983 12.67 18.1858 12.9875 18.1367 14.0417C18.0858 15.0167 17.9233 15.5458 17.7858 15.8975C17.5992 16.3658 17.3867 16.6975 17.0367 17.0492C16.6875 17.3983 16.35 17.615 15.8867 17.7958C15.5367 17.9325 14.9992 18.0958 14.0242 18.14C12.9625 18.1875 12.65 18.1983 9.975 18.1983C7.29917 18.1983 6.98667 18.1858 5.92583 18.1367C4.95 18.0858 4.4125 17.9233 4.0625 17.7858C3.58833 17.5992 3.2625 17.3867 2.91333 17.0367C2.5625 16.6875 2.33833 16.35 2.16333 15.8867C2.02583 15.5367 1.86417 14.9992 1.81333 14.0242C1.77583 12.9742 1.7625 12.65 1.7625 9.9875C1.7625 7.32417 1.77583 6.99917 1.81333 5.93667C1.86417 4.96167 2.02583 4.425 2.16333 4.075C2.33833 3.6 2.5625 3.275 2.91333 2.92417C3.2625 2.575 3.58833 2.35 4.0625 2.17583C4.4125 2.0375 4.93833 1.875 5.91333 1.825C6.97583 1.7875 7.28833 1.775 9.9625 1.775L10 1.8ZM10 4.865C7.1625 4.865 4.865 7.165 4.865 10C4.865 12.8375 7.165 15.135 10 15.135C12.8375 15.135 15.135 12.835 15.135 10C15.135 7.1625 12.835 4.865 10 4.865ZM10 13.3333C8.15833 13.3333 6.66667 11.8417 6.66667 10C6.66667 8.15833 8.15833 6.66667 10 6.66667C11.8417 6.66667 13.3333 8.15833 13.3333 10C13.3333 11.8417 11.8417 13.3333 10 13.3333ZM16.5383 4.6625C16.5383 5.325 16 5.8625 15.3383 5.8625C14.6758 5.8625 14.1383 5.32417 14.1383 4.6625C14.1383 4.00083 14.6767 3.46333 15.3383 3.46333C15.9992 3.4625 16.5383 4.00083 16.5383 4.6625Z" />
              <defs>
                <clipPath id="clip0_396_3261">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div
          onClick={() =>
            sendGAEvent("Linkedin Footer", "Click", "User clicks on Linkedin")
          }
          className="cursor-pointer"
        >
          <a
            href="https://www.linkedin.com/company/the-hyper-brand/"
            target="_blank"
          >
            <svg
              className={`w-6 h-6 text-black`}
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.0392 17.0433H14.0775V12.4025C14.0775 11.2958 14.055 9.87167 12.5342 9.87167C10.99 9.87167 10.7542 11.0758 10.7542 12.3208V17.0433H7.7925V7.5H10.6375V8.80083H10.6758C11.0733 8.05083 12.04 7.25917 13.4842 7.25917C16.485 7.25917 17.04 9.23417 17.04 11.805L17.0392 17.0433ZM4.4475 6.19417C3.49417 6.19417 2.72833 5.4225 2.72833 4.47333C2.72833 3.525 3.495 2.75417 4.4475 2.75417C5.3975 2.75417 6.1675 3.525 6.1675 4.47333C6.1675 5.4225 5.39667 6.19417 4.4475 6.19417ZM5.9325 17.0433H2.9625V7.5H5.9325V17.0433ZM18.5208 0H1.47583C0.66 0 0 0.645 0 1.44083V18.5592C0 19.3558 0.66 20 1.47583 20H18.5183C19.3333 20 20 19.3558 20 18.5592V1.44083C20 0.645 19.3333 0 18.5183 0H18.5208Z" />
              <defs>
                <clipPath id="clip0_396_3269">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div
          onClick={() =>
            sendGAEvent("Threads Footer", "Click", "User clicks on Threads")
          }
          className="cursor-pointer"
        >
          <a href="" target="_blank">
            <svg
              className={`w-6 h-6 text-black`}
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 512"
            >
              <path d="M105 0h302c57.75 0 105 47.25 105 105v302c0 57.75-47.25 105-105 105H105C47.25 512 0 464.75 0 407V105C0 47.25 47.25 0 105 0z" />
              <path
                fill="#fff"
                fillRule="nonzero"
                d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"
              />
            </svg>
          </a>
        </div>
        <div
          onClick={() =>
            sendGAEvent("Medium Footer", "Click", "User clicks on Medium")
          }
          className="cursor-pointer"
        >
          <a href="" target="_blank">
            <svg
              className={`w-6 h-6 `}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-sm font-light pb-20 lg:pb-0">
        © Designed and Developed By The Hyper Brand
      </div>
    </div>
  );
};

export default Footer;
