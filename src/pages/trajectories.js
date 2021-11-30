import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import TimeSelector from "../components/time-selector";
import PersonSelector from "../components/person-selector";
import TrajectoriesMap from "../components/trajectories-map";
import VizContainer from "../components/viz-container";

const TrajectoriesPage = () => {
  // Set a default for the state of false
  const [bike, flipBike] = React.useState(false);
  // Create an "event handler" function to capture the event and
  // THEN flip the variable using the function that flips the variable
  const handleChange = () => {
    flipBike(!bike);
  };
  return (
    <Layout>
      <Seo title="Trajectories" />
      <h1>Trajectories</h1>
      <VizContainer>
        <SelectionPanel>
          <TimeSelector handleChange={handleChange} bike={bike} />
          <PersonSelector bike={bike} />
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
