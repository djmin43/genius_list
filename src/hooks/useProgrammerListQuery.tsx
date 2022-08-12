import { graphql, useStaticQuery } from "gatsby";

export const useProgrammerListQuery = () => {
  const {
    allContentfulPage: { nodes },
  } = useStaticQuery(graphql`
    query ProgrammerListQuery {
      allContentfulPage {
        nodes {
          ...ProgrammerDetailFragment
        }
      }
    }
  `);
  return nodes;
};
