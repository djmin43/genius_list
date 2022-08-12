import { graphql } from "gatsby";

export const programmerFragment = graphql`
  fragment ProgrammerDetail on ContentfulPage {
    id
    link
    url
    name
    mainLanguage
    description
    image {
      gatsbyImage(width: 200, height: 200)
    }
  }
`;
