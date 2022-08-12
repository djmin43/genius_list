import React from "react";
import {styled} from "gatsby-theme-stitches/src/config";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";
import ProgrammerDetailFragment = Queries.ProgrammerDetailFragment;

interface CardProps {
  programmerData: ProgrammerDetailFragment;
}

const SmallCard = ({ programmerData }: CardProps) => {
  const image = getImage(programmerData.image) as IGatsbyImageData;

  return (
    <CardContainer>
      <GatsbyImage alt={programmerData.name as string} image={image} />
      <ProgrammerName>
        <h3>{programmerData.name}</h3>
      </ProgrammerName>
    </CardContainer>
  );
};

const CardContainer = styled("div", {
  padding: "1rem",
  margin: "0.25rem",
  width: "15rem",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "$primaryWhite",
});

const ProgrammerName = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "5rem",
  "&>h3": {
    fontSize: "$semiMedium",
    fontWeight: "$semiBold",
  },
});

export default SmallCard;
