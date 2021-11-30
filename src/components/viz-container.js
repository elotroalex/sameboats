import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const VizContainer = ({ children }) => {
  return <VizBox className="visualization">{children}</VizBox>;
};

const VizBox = styled.div`
  height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  @media only screen and (max-width: 960px) {
    flex-flow: column nowrap;
  }
`;

VizContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VizContainer;
