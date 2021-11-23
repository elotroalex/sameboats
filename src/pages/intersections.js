import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const IntersectionsPage = () => (
  <Layout>
    <Seo title="Intersections" />
    <h1>Intersections</h1>
    <Container>
      <SelectionPanel>
        <TimeSpanSelector>[Time Span Selector]</TimeSpanSelector>
        <MapSelector>[Map Selector]</MapSelector>
      </SelectionPanel>
      <IntersectionsResults>[Intersections Results]</IntersectionsResults>
    </Container>
  </Layout>
);

const Container = styled.div`
  height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const SelectionPanel = styled.div`
  height: calc(100vh - 4rem);
  width: 75%;
  display: flex;
  flex-flow: column nowrap;
`;

const TimeSpanSelector = styled.div`
  height: 10%;
  background: #aa6c39;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const MapSelector = styled.div`
  height: 90%;
  background: #aa3939;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const IntersectionsResults = styled.div`
  height: calc(100vh - 4rem);
  background: #882d60;
  width: 25%;
  display: flex;
  flex-flow: column nowrap;
`;

export default IntersectionsPage;
