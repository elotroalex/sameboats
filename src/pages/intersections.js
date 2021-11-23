import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const IntersectionsPage = () => (
  <Layout>
    <Seo title="Intersections" />
    <h1>Intersections</h1>
    <Container>
      <MapSelector>[Map Selector]</MapSelector>
      <SidePanel>
        <TimeSpanSelector>[Time Span Selector]</TimeSpanSelector>
        <IntersectionsResults>[Intersections Results]</IntersectionsResults>
      </SidePanel>
    </Container>
  </Layout>
);

const Container = styled.div`
  height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const SidePanel = styled.div`
  height: calc(100vh - 4rem);
  width: 25%;
  display: flex;
  flex-flow: column nowrap;
`;

const TimeSpanSelector = styled.div`
  height: 20%;
  background: #aa6c39;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const MapSelector = styled.div`
  height: calc(100vh - 4rem);
  background: #aa3939;
  width: 75%;
  display: flex;
  flex-flow: row nowrap;
`;

const IntersectionsResults = styled.div`
  height: 80%;
  background: #882d60;
  display: flex;
  flex-flow: column nowrap;
`;

export default IntersectionsPage;
