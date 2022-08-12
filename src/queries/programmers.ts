import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export interface IProgrammer {
  id: string;
  url?: string;
  name: string;
  description?: string;
  mainLanguage?: string;
  link?: string;
  image: IGatsbyImageData | null;
}

export const programmerFragment = graphql`
  fragment ProgrammerFragment on ContentfulPage {
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
