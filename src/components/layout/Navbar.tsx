import React from "react";
import { styled } from "gatsby-theme-stitches/src/config";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoText>
        genius_list<HighlightDot>.</HighlightDot>
      </LogoText>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  background: "$primaryDark",
  padding: "1rem",
});

const LogoText = styled("h1", {
  color: "$primaryWhite",
  fontWeight: "$medium",
  fontSize: "$large",
});

const HighlightDot = styled("span", {
  color: "$primaryOrange",
});

export default Navbar;
