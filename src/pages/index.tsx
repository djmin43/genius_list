import * as React from "react";
import Layout from "../components/layout/Layout";
import { useProgrammerListQuery } from "../hooks/useProgrammerListQuery";
import SmallCard from "../components/common/SmallCard";
import { styled } from "@stitches/react";
import { Link } from "gatsby";

const IndexPage = () => {
  const programmersList = useProgrammerListQuery();
  return (
    <Layout>
      <ProgrammerWrapper>
        {programmersList.map((programmer) => (
          <Link key={programmer.id} to={`/${programmer.id}`}>
            <SmallCard programmerData={programmer} />
          </Link>
        ))}
      </ProgrammerWrapper>
    </Layout>
  );
};

const ProgrammerWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "2rem",
});

export default IndexPage;
