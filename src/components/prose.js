import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProseBox = styled.div`
  max-width: 600px;
`;

const Prose = ({ children }) => {
  return <ProseBox className="content">{children}</ProseBox>;
};

Prose.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Prose;
