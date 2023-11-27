import React from "react";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import "./style.css";
import Resume from '../../Assets/Resume/resume.pdf';
const DownloadResume = () => {
  return (
    <div id="DownloadResume">
      <a href={Resume} target="_blank" rel="noreferrer">
      <Button
        className="DownloadResumeButton  "
        component="label"
        variant="contained"
        style={{backgroundColor:"transparent", color:"grey",boxShadow:"none"}}
        endIcon={<CloudDownloadIcon />}
      >
        Download Resume
      </Button>
      </a>
    </div>
  );
};

export default DownloadResume;
