"use client";
import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

const CancellationAndRefund = () => {
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
          Cancellation and Refund Policy
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
        </TextStyled>
        <TextStyled sx={{ fontWeight: "600", fontSize: "1.2rem" }}>
          <br />
          Following are the terms cancellation and refund policy
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
          team at <a href="sumit@thehyperbrand.com">sumit@thehyperbrand.com</a>
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
          at <a href="sumit@thehyperbrand.com">sumit@thehyperbrand.com</a>.
          Provide detailed information about the issue, including your username,
          the nature of the problem, and any relevant documentation.
        </TextStyled>
      </Box>
    </>
  );
};

export default CancellationAndRefund;
