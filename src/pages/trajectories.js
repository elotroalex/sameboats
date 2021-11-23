import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const TrajectoriesPage = () => (
  <Layout>
    <Seo title="Trajectories" />
    <h1>Trajectories</h1>
    <Container>
      <SelectionPanel>
        <TimeSpanSelector>[Time Span Selector]</TimeSpanSelector>
        <PersonSelector>[Person Selector]</PersonSelector>
      </SelectionPanel>
      <TrajectoriesMap>[Map]</TrajectoriesMap>
    </Container>
  </Layout>
);

const Container = styled.div`
  height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  @media only screen and (max-width: 960px) {
    flex-flow: column nowrap;
  }
`;

const SelectionPanel = styled.div`
  height: calc(100vh - 4rem);
  width: 25%;
  display: flex;
  flex-flow: column nowrap;

  @media only screen and (max-width: 960px) {
    min-height: 400px;
    width: 100%;
  }
`;

const TrajectoriesMap = styled.div`
  height: calc(100vh - 4rem);
  background: #aa3939;
  width: 75%;
  display: flex;
  flex-flow: column nowrap;

  @media only screen and (max-width: 960px) {
    height: 100%;
    width: 100%;
  }
`;

const TimeSpanSelector = styled.div`
  height: 20%;
  background: #aa6c39;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const PersonSelector = styled.div`
  height: 80%;
  background: #882d60;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export default TrajectoriesPage;
