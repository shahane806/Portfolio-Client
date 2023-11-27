import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import Services from "../Services/Services";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div id="Banner"></div>
      <div id="Banner-Info">
        <h1>Discover my Amazing Art Space</h1>
        <Link to="/work">
        <Button variant="container" className="button nav-resume-button">
          <h4>Explore</h4>
        </Button>
        </Link>
      <Services />
      </div>
    </>
  );
};

export default Banner;
