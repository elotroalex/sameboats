import * as React from "react";
import styled from "styled-components";

export default function TimeSelector({ handleChange, bike }) {
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
}

const Container = styled.div`
  height: 20%;
  background: #aa6c39;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;
