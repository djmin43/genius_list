import { graphql, useStaticQuery } from "gatsby";

export const useProgrammerListQuery = () => {
  const {
    allContentfulPage: { nodes },
  } = useStaticQuery(graphql`
    query ProgrammerListQuery {
      allContentfulPage {
        nodes {
            ...ProgrammerDetail
        }
      }
    }
  `);
  return nodes;
};
