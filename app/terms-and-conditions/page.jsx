"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const TermsAndConditions = () => {
  const TextStyled = styled(Typography)`
    text-align: justify;
    position: relative;
    width: 90%;
  `;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
          mt: "1rem",
        }}
      >
        <div className="block p-2 mt-10">
          <Image
            src="/images/THB.svg"
            alt="TheHyperbrand Logo"
            width={180}
            height={40}
          />
        </div>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "600",
            textAlign: "center",
            m: "2rem",
          }}
        >
          Terms and Conditions
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <br />
        <TextStyled>
          Welcome to TheHyperBrand! <br />
          <br />
          <TextStyled>Effective Date: 20 Dec 2023</TextStyled>
          <br /> These Terms and Conditions (&quot;Terms&quot;) govern your use
          of the website https://thehyperbrand.com/ (the &quot;Website&quot;).
          By accessing or using the Website, you agree to be bound by these
          Terms. If you do not agree to these Terms, please refrain from using
          the Website.
        </TextStyled>

        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Use of the Website
        </TextStyled>
        <TextStyled>
          <br />
          a. Eligibility: <br />
          To use the Website, you must be at least 18 years old. By using the
          Website, you represent and warrant that you are at least 18 years old.
          <br />
          <br />
          b. Account Registration:
          <br />
          To access certain features and services on the Website, you may be
          required to create an account. You are responsible for maintaining the
          confidentiality of your account information, including your username
          and password. You agree to provide accurate, current, and complete
          information during the registration process. You must notify us
          immediately of any unauthorized use of your account.
          <br />
          <br />
          c. User Conduct:
          <br />
          When using the Website, you agree to:
          <br />- Comply with all applicable laws, regulations, and these Terms.{" "}
          <br />- Respect the privacy and intellectual property rights of
          others. <br />
          - Not engage in any fraudulent, abusive, or illegal activities. <br />
          - Not disrupt or interfere with the functioning of the Website. <br />
          - Not transmit any viruses, malware, or harmful code.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Subscription and Payments
        </TextStyled>
        <TextStyled>
          <br />
          <strong>a. Purchases:</strong> <br />
          If you wish to purchase any product or service made available through
          the Services (“Purchase”), you may be asked to supply certain
          information relevant to your Purchase including, without limitation,
          your credit card number, the expiration date of your credit card, your
          billing address, and your shipping information. You represent and
          warrant that: (i) you have the legal right to use any credit card(s)
          or other payment method(s) in connection with any Purchase; and that
          (ii) the information you supply to us is true, correct and complete.
          The Services may employ the use of third party services for the
          purpose of facilitating payment and the completion of Purchases. By
          submitting your information, you grant us the right to provide the
          information to these third parties subject to our Privacy Policy.{" "}
          <br />
          <br />
          We reserve the right to refuse or cancel your order at any time for
          reasons including but not limited to: product or service availability,
          errors in the description or price of the product or service, error in
          your order or other reasons. We reserve the right to refuse or cancel
          your order if fraud or an unauthorized or illegal transaction is
          suspected.
          <br />
          <br />
          <strong>b. Subscription Term and Payment</strong> <br />
          The Services are provided on a subscription basis for a set term
          (billing period) that is specified on your invoice. You will be billed
          on a recurring and periodic basis (monthly, or annually), depending on
          the type of Subscription plan you select when purchasing the
          Subscription. At the end of each period, Your Subscription will
          automatically renew under the exact same conditions unless You cancel
          it or the Company cancels it.
          <br />
          <br />
          You agree to pay all applicable fees for the Services as set forth on
          the invoice. Payment can be made through various payment methods we
          have available, such as Visa, MasterCard, Affinity Card, American
          Express cards. Payment cards (credit cards or debit cards) are subject
          to validation checks and authorization by Your card issuer. If we do
          not receive the required authorization, We will not be liable for any
          delay or non-delivery of Your Order.
          <br />
          <br />
          <strong>c. Fee Changes</strong> <br />
          The Company, in its sole discretion and at any time, may modify the
          Subscription fees. Any Subscription fee change will become effective
          at the end of the then-current Subscription period. The Company will
          provide You with reasonable prior notice of any change in Subscription
          fees to give You an opportunity to terminate Your Subscription before
          such change becomes effective. Your continued use of the Service after
          the Subscription fee change comes into effect constitutes Your
          agreement to pay the modified Subscription fee amount.
          <br />
          <br />
          <strong>d. Free Trial:</strong> <br />
          TheHyperBrand offers a free trial period during which users can access
          certain features of the application. This free trial is available to
          all users and is intended to allow users to explore the application
          capabilities.
          <br />
          <br />
          <strong>e. Cancellation:</strong> <br />- Free Trial: Users are free
          to discontinue the use of the application at any time during the free
          trial period without incurring any charges.
          <br />
          - Subscription: <br />
          Users can cancel their subscription at any time. Once canceled, the
          subscription will remain active until the end of the current billing
          period. <br />
          To cancel your subscription, please follow the cancellation
          instructions provided within the application or contact our support
          team at <a href="rishabh@thehyperbrand.com">rishabh@thehyperbrand.com</a>
          <br />
          <br />
          <strong>f. Refund Policy:</strong> <br />- Free Trial: No charges are
          incurred during the free trial, and no refunds are applicable for the
          free trial period.
          <br />
          - Subscription: <br />
          All subscription payments are final, and no refunds will be provided
          once payment has been processed. <br />
          Exception: In certain special cases, a refund may be considered.
          Special cases may include technical issues that prevent proper use of
          the application or other extenuating circumstances.
          <br />
          <br />
          <strong>g. Requesting a Refund:</strong> <br />
          For special cases requiring a refund, please contact our support team
          at <a href="rishabh@thehyperbrand.com">rishabh@thehyperbrand.com</a>.
          Provide detailed information about the issue, including your username,
          the nature of the problem, and any relevant documentation.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          User Content
        </TextStyled>
        <TextStyled>
          <br />
          <strong>a. User Responsibilities:</strong> <br />
          As a user of the Website, you are solely responsible for any content
          you post, upload, or transmit on the Website, including text, images,
          and any other materials (&quot;User Content&quot;). You retain
          ownership of your User Content, but by posting it on the Website, you
          grant the Company a non-exclusive, royalty-free, worldwide license to
          use, display, reproduce, and distribute your User Content for the
          purposes of operating and promoting the Website.
          <br />
          <br />
          b. Prohibited Content: <br />
          You agree not to post any User Content that is:
          <br />
          - False, misleading, or deceptive.
          <br />- Infringing upon the intellectual property rights of others.
          <br />- Offensive, defamatory, or violates any privacy or publicity
          rights.
          <br />- Unlawful or promotes illegal activities.
          <br />- Contains viruses, malware, or other harmful code.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Termination
        </TextStyled>
        <TextStyled>
          <br />
          The Company may terminate your access to the App at any time, for any
          reason, without notice. Upon termination, you must immediately stop
          using the App.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Intellectual Property
        </TextStyled>
        <TextStyled>
          <br />
          The Website and its contents, including but not limited to logos,
          trademarks, text, graphics, images, and software, are the property of
          the Company or its licensors and are protected by intellectual
          property laws. You are granted a limited, non-exclusive,
          non-transferable license to access and use the Website for personal,
          non-commercial purposes. You agree not to modify, reproduce,
          distribute, or create derivative works based on the Website without
          prior written consent from the Company.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Privacy Policy
        </TextStyled>
        <TextStyled>
          <br />
          Your privacy is important to us. Please refer to our Privacy Policy,
          which explains how we collect, use, and protect your personal
          information. By using the Website, you consent to the collection and
          use of your personal information as described in the Privacy Policy.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Reservation of Rights
        </TextStyled>
        <TextStyled>
          <br />
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          iFrames
        </TextStyled>
        <TextStyled>
          <br />
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Removal of links from our website
        </TextStyled>
        <TextStyled>
          <br />
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly. We do not ensure that the information on this
          website is correct, we do not warrant its completeness or accuracy;
          nor do we promise to ensure that the website remains available or that
          the material on the website is kept up to date.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Dispute Resolution
        </TextStyled>
        <TextStyled>
          <br />
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the Company.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Copyright Policy
        </TextStyled>
        <TextStyled>
          <br />
          We respect the intellectual property rights of others. It is our
          policy to investigate any claim that Customer Data posted on the
          Services infringes on the copyright or other intellectual property
          rights of any person or entity. If you are a copyright owner, or
          authorized on behalf of one, and you believe that the copyrighted work
          has been copied in a way that constitutes copyright infringement,
          please submit your claim via email to{" "}
          <a href="rishabh@thehyperbrand.com">rishabh@thehyperbrand.com</a>, with
          the subject line: “Copyright Infringement”. You may be held
          accountable for damages (including costs and attorneys fees) for
          misrepresentation or bad-faith claims on the infringement of any
          Customer Data found on and/or through the Services on your copyright.
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.4rem" }}>
          <br />
          Disclaimer
        </TextStyled>
        <TextStyled>
          <br />
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
          <br />- limit or exclude our or your liability for death or personal
          injury;
          <br />- limit or exclude our or your liability for fraud or fraudulent
          misrepresentation;
          <br />- limit any of our or your liabilities in any way that is not
          permitted under applicable law; or
          <br />- exclude any of our or your liabilities that may not be
          excluded under applicable law.
          <br />
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty. As long as the website and the information
          and services on the website are provided free of charge, we will not
          be liable for any loss or damage of any nature.
          <br />
          <br />
        </TextStyled>
      </Box>
    </>
  );
};

export default TermsAndConditions;
