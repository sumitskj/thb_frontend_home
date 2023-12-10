import React from "react";
import "./customerMarquee.css"; // Import the CSS file for styles
import Image from "next/image";

const CustomerMarquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        <div className="flex justify-around items-center w-full relative px-60 mt-4">
          <Image
            src="/images/company-logos/eventbrite.svg"
            width={100}
            height={50}
            alt="eventbrite company logo"
          />
          <Image
            src="/images/company-logos/doordash.svg"
            width={100}
            height={50}
            alt="doordash company logo"
          />
          <Image
            src="/images/company-logos/reddit.svg"
            width={100}
            height={50}
            alt="reddit company logo"
          />
          <Image
            src="/images/company-logos/trello.svg"
            width={100}
            height={50}
            alt="trello company logo"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerMarquee;
