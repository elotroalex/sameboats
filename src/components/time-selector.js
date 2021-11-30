import * as React from "react";
import styled from "styled-components";

const TimeSelector = ({ handleChange, bike }) => {
  const flipIt = () => {
    handleChange(!bike);
  };
  return (
    <Container bike={bike}>
      <form action="">
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          onChange={flipIt}
          checked={bike}
        ></input>
        <label for="vehicle1"> I have a bike</label>
        <br />
      </form>
    </Container>
  );
};

const Container = styled.div`
  height: 20%;
  background: #aa6c39;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export default TimeSelector;
