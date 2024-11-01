import React from "react";
import PropTypes from "prop-types";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Books></Books>
    </div>
  );
};

Home.propTypes = {};

export default Home;
