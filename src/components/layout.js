/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import { withPrefix } from "gatsby-link";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script src={withPrefix("scripts.js")} type="text/javascript" />
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
