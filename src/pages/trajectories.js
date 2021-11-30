import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import TimeSelector from "../components/time-selector";
import PersonSelector from "../components/person-selector";
import TrajectoriesMap from "../components/trajectories-map";

const TrajectoriesPage = () => {
  // Set a default for the state of false
  const [time, changeTime] = React.useState(false);
  return (
    <Layout>
      <Seo title="Trajectories" />
      <h1>Trajectories</h1>
      <Container>
        <SelectionPanel>
          <TimeSelector changeTime={changeTime} time={time} />
          <PersonSelector time={time} />
        </SelectionPanel>
        <TrajectoriesMap />
      </Container>
    </Layout>
  );
};

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

const Container = styled.div`
  height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  @media only screen and (max-width: 960px) {
    flex-flow: column nowrap;
  }
`;

export default TrajectoriesPage;
