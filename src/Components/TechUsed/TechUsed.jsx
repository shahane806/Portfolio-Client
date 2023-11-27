import React from "react";
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";
const TechUsed = () => {
  return (
    <div id="TechUsed">
      <h4>Technical skills</h4>
      <div className="TechUsedProgress">
        <div className="TechUsedProgressInfo">
          <CircularProgress
            variant="determinate"
            value={80}
            style={{ color: "skyblue" }}
          />
          <h5>ReactJs</h5>
        </div>
        <div className="TechUsedProgressInfo">
          <CircularProgress
            variant="determinate"
            value={70}
            style={{ color: "skyblue" }}
          />
          <h5>Core PHP</h5>
        </div>
        <div className="TechUsedProgressInfo">
          <CircularProgress
            variant="determinate"
            value={60}
            style={{ color: "lightgreen" }}
          />
          <h5 style={{ color: "lightgreen" }}>Android</h5>
        </div>

        <div className="TechUsedProgressInfo">
          <CircularProgress
            variant="determinate"
            value={40}
            style={{ color: "skyblue" }}
          />
          <h5>Go</h5>
        </div>
        <div className="TechUsedProgressInfo">
          <CircularProgress
            variant="determinate"
            value={60}
            style={{ color: "orange" }}
          />
          <h5 style={{ color: "white" }}>Firebase</h5>
        </div>
        <div className="TechUsedProgressInfo">
          <CircularProgress
            variant="determinate"
            value={85}
            style={{ color: "cyan" }}
          />
          <h5>PostgreSql</h5>
        </div>
        <div className="TechUsedProgressInfo">
          <CircularProgress
            variant="determinate"
            value={85}
            style={{ color: "white" }}
          />
          <h5 style={{ color: "Orange" }}>MySql</h5>
        </div>
        <div className="TechUsedProgressInfo">
          <CircularProgress
            variant="determinate"
            value={70}
            style={{ color: "lightgreen" }}
          />
          <h5 style={{ color: "lightgreen" }}>MongoDB</h5>
        </div>
      </div>
    </div>
  );
};

export default TechUsed;
