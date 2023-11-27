import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";

import NavigationBar from "../NavigationBar/NavigationBar";
import { Button, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import ModeIcon from "@mui/icons-material/Mode";
import EmailIcon from "@mui/icons-material/Email";
import sendMessage from '../../../Actions/sendMessage';

const Contact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    name : name,
    email : email,
    mobile : mobile,
    subject : subject,
    message : message,
  }
  const handleSubmit = () => {
    dispatch(
      sendMessage({
        type: "SEND_MESSAGE",
        payload: data,
      })
    );
    alert("Message Successfully submitted.");
  };

  return (
    <div id="Dashboard">
      <NavigationBar />
      <div className="ContactInformation">
        <h4>Contact Information</h4>
        <p>Contry : India</p>
        <p>District : Ahmednagar</p>
        <p>City : Pathardi</p>
        <p>Email : om.p.shahane@gmail.com</p>
        <p>Mobile : +917887941005</p>
      </div>
      <div id="Contact" className="Dashboard-Information">
        <h4>Get in touch</h4>
        <form className="ContactInformation input-box">
          <div className="info">
            <label className="info-input-logo">
              <PersonIcon />
            </label>
            <TextField className="info-input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <div className="info">
            <label className="info-input-logo">
              <AlternateEmailIcon />
            </label>
            <TextField
              className="info-input"
              type="Email"
              placeholder="Email"
              value={email} onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="info">
            <label className="info-input-logo">
              <CallIcon />
            </label>
            <TextField
              className="info-input"
              type="Number"
              placeholder="Mobile"
              value={mobile} onChange={e => setMobile(e.target.value)}
            />
          </div>
          <div className="info">
            <label className="info-input-logo">
              <ModeIcon />
            </label>
            <TextField
              className="info-input"
              type="text"
              placeholder="Subject"
              value={subject} onChange={e => setSubject(e.target.value)}
            />
          </div>
          <div className="info">
            <label className="info-input-logo">
              <EmailIcon />
            </label>
            <TextField
              className="info-input"
              type="text"
              placeholder="Message"
              value={message} onChange={e => setMessage(e.target.value)}
            />
          </div>

          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
