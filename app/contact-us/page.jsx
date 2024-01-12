"use client";
import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

const ContactUsPage = () => {
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
          Contact Us
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
        <TextStyled sx={{ fontWeight: "400", fontSize: "1.2rem" }}>
          <br />
          If you need any assistance please send a mail with your queries at{" "}
          <a href="rishabh@thehyperbrand.com">rishabh@thehyperbrand.com</a>
          <br />
          Address: B-67 Sarvodaya Enclave, New Delhi, 110017
        </TextStyled>
      </Box>
    </>
  );
};

export default ContactUsPage;
