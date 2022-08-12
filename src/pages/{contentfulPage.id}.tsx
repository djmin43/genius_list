import React from "react";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import {styled} from "gatsby-theme-stitches/src/config";
import ProgrammerDetailFragment = Queries.ProgrammerDetailFragment;
import {graphql} from "gatsby";

interface ProgrammerPageProps {
  data: {
    contentfulPage: ProgrammerDetailFragment;
  };
}

const ProgrammerPage = ({
  data: { contentfulPage: programmerDetail },
}: ProgrammerPageProps) => {
  const image = getImage(programmerDetail.image) as IGatsbyImageData;

  return (
    <Layout>
      <ProgrammerWrapper>
        <GatsbyImage alt={programmerDetail.name as string} image={image} />
        <VStack>
          <TextWrapper>
            <span className="label">name: </span>
            {programmerDetail.name}
          </TextWrapper>
          <TextWrapper>
            <span className="label">main_language: </span>
            {programmerDetail.mainLanguage}
          </TextWrapper>
          {programmerDetail.link && (
            <TextWrapper>
              <p className="label">link:</p>
              <a className="link" href={programmerDetail.link}>
                <i>click here</i>
              </a>
            </TextWrapper>
          )}
          <TextWrapper>
            <p className="label">description:</p>
            {programmerDetail.mainLanguage}
          </TextWrapper>
        </VStack>
      </ProgrammerWrapper>
    </Layout>
  );
};

const ProgrammerWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "1rem",
  padding: "1rem",
  background: "$primaryWhite",
});

const VStack = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const TextWrapper = styled("div", {
  margin: "0.25rem",
  "&>.label": {
    fontWeight: "$semiBold",
  },
  "&>.link": {
    fontWeight: "$light",
    color: "$blue",
  },
});

export const query = graphql`
  query ContentfulQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      ...ProgrammerDetail
    }
  }
`;

export default ProgrammerPage;
