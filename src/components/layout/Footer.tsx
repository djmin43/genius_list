import React from "react";
import { styled } from "gatsby-theme-stitches/src/config";

const Footer = () => {
  return (
    <FooterWrapper>
      <p className="footer-info">copyright | sitemap | privacy policy</p>
      <p className="footer-info">terms of use</p>
      <p className="footer-info">contact</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled("footer", {
  padding: "5rem",
  background: "$primaryBlue",
  "&>.footer-info": {
    color: "$primaryWhite",
    fontSize: "$small",
    fontWeight: "$extraLight",
    textAlign: "center",
  },
});

export default Footer;
