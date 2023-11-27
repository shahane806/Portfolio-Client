import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div id="My-Services">
      <div className="Services">
        <h4>Web Developer</h4>
        <p>
          A beautifyl spawn website for your business or personal need to get
          your clients land on in order to understand your services.
        </p>
       <Link to="/contact">
       <Button variant="container" className="button nav-resume-button">
          <h4>Hire Now</h4>
          <ChevronRightIcon />
        </Button>
       </Link>
      </div>
      <div className="Services">
        <h4>App Development</h4>
        <p>
        Wanna make a stunning mobile application for your requirement. App can be the best way to go with. Let's get your business on Mobile Application.
        </p>
        <Link to="/contact">
        <Button variant="container" className="button nav-resume-button">
          <h4>Hire Now</h4>
          <ChevronRightIcon />
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
