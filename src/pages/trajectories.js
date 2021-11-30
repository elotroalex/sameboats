import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import TimeSelector from "../components/time-selector";
import PersonSelector from "../components/person-selector";
import TrajectoriesMap from "../components/trajectories-map";
import VizContainer from "../components/viz-container";
import { SetTime } from "../components/time-selector";

const TrajectoriesPage = () => {
  let time = SetTime();
  return (
    <Layout>
      <Seo title="Trajectories" />
      <h1>Trajectories</h1>
      <VizContainer>
        <SelectionPanel>
          <TimeSelector handleChange={time.handleChange} bike={time.bike} />
          <PersonSelector bike={time.bike} />
        </SelectionPanel>
        <TrajectoriesMap />
      </VizContainer>
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

export default TrajectoriesPage;
