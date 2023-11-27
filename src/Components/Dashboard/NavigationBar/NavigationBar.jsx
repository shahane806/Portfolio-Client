import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import resume from "../../../Assets/Resume/resume.pdf";
import "./style.css";
const NavigationBar = () => {
  return (
    <div id="NavigationBar">
      <ul>
        <Link className="link" to="/">
          <li>
            <h4>Home</h4>
          </li>
        </Link>
        <Link className="link" to="/Experience">
          <li>
            <h4>Experience</h4>
          </li>
        </Link>
        <Link className="link" to="/Work">
          <li>
            <h4>Work</h4>
          </li>
        </Link>
        <Link className="link" to="/Blog">
          <li>
            <h4>Blog</h4>
          </li>
        </Link>
        <Link className="link" to="/Contact">
          <li>
            <h4>Contact</h4>
          </li>
        </Link>
        <Button variant="text">
          <a
            href={resume}
            className="nav-resume-button"
          >
            Resume
          </a>
        </Button>
      </ul>
    </div>
  );
};

export default NavigationBar;
