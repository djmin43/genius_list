import { graphql, useStaticQuery } from "gatsby";
import ProgrammerFragment = Queries.ProgrammerFragment;

export const useProgrammerListQuery = (): ProgrammerFragment[] => {
  const {
    allContentfulPage: { nodes },
  } = useStaticQuery(graphql`
    query ProgrammerListQuery {
      allContentfulPage {
        nodes {
          ...Programmer
        }
      }
    }
  `);
  return nodes;
};
