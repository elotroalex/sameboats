import * as React from "react";
import styled from "styled-components";

const SetTime = () => {
  // Set a default for the state of false
  const [bike, flipBike] = React.useState(false);
  // Create an "event handler" function to capture the event and
  // THEN flip the variable using the function that flips the variable
  const handleChange = () => {
    flipBike(!bike);
  };
  return { bike, handleChange };
};

const TimeSelector = ({ handleChange, bike }) => {
  return (
    <Container>
      <form action="">
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          onChange={handleChange}
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
export { SetTime };
