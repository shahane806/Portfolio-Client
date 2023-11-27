import React from "react";
import "./style.css";
import NavigationBar from "../Dashboard/NavigationBar/NavigationBar";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Experience = () => {
  return (
    <div id="Dashboard">
      <NavigationBar />

      <div id="Experience" className="Dashboard-Information">
        <h2>Education</h2>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="Services">
                <h4>MCA (Master in Computer Application)</h4>
                <p>Pursuing...</p>
                <Button
                  variant="container"
                  className="button nav-resume-button"
                >
                  <h4>Check Degree</h4>
                  <ChevronRightIcon />
                </Button>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className="Services">
                <h4>BCA (Bachlore of Computer Application)</h4>
                <p>SGPA : 9.15</p>
                <p>Collage : New Arts, Commerce & Science Collage Ahmednagar</p>
                <p>University : Savatribai phule pune university.</p>

                <Button
                  variant="container"
                  className="button nav-resume-button"
                >
                  <h4>Check Degree Certificate</h4>
                  <ChevronRightIcon />
                </Button>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className="Services">
                <h4>HSC or 12th</h4>
                <p>Percentage : 78.77%</p>
                <p>College : Shri Tilok Jain Vidhalaya Pathardi.</p>
                <Button
                  variant="container"
                  className="button nav-resume-button"
                >
                  <h4>Check Marksheet</h4>
                  <ChevronRightIcon />
                </Button>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className="Services">
                <h4>SSC or 10th</h4>
                <p>Percentage : 80.20%</p>
                <p>School : Parth Public School</p>
                <Button
                  variant="container"
                  className="button nav-resume-button"
                >
                  <h4>Check Marksheet</h4>
                  <ChevronRightIcon />
                </Button>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
