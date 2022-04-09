import React, { useState, useEffect } from "react";
import "./patient.css";
import axios from "axios";

export default function Patient() {
  const [patient, setPatient] = useState({});
  useEffect(() => {
    (async () => {
      let data = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
      );
      let patientData = (data = data.data[0]);
      console.log(patientData);
      setPatient({ ...patientData });
    })();
  }, []);
  return (
    <div className="patient-container">
      <div className="patient-left">
        <div className="patientimg">
          <img src="https://bit.ly/3r9r976" alt="" />
        </div>
        <div className="bigtext">{patient.name}</div>
        <div className="smalltext">{patient["e-email"]}</div>
        <div className="wrapper">
          <div className="left">
            <div className="bigtext">{patient.Past}</div>
            <div className="smalltext">Past</div>
          </div>
          <div className="right">
            <div className="bigtext">{patient.Upcoming}</div>
            <div className="smalltext">Upcoming</div>
          </div>
        </div>
        <button className="sendmsg">Send Message</button>
      </div>
      <div className="patient-right">
        <div className="patient-wrap">
          <div className="title">Gender</div>
          <div className="text">{patient.Gender}</div>
        </div>
        <div className="patient-wrap">
          <div className="title">Birthday</div>
          <div className="text">{patient.Birthday}</div>
        </div>
        <div className="patient-wrap">
          <div className="title">Phone Number</div>
          <div className="text">{patient["Phone Number"]}</div>
        </div>
        <div className="patient-wrap">
          <div className="title">Street Address</div>
          <div className="text">{patient["Street Address"]}</div>
        </div>
        <div className="patient-wrap">
          <div className="title">City</div>
          <div className="text">--</div>
        </div>
        <div className="patient-wrap">
          <div className="title">{patient["ZIP Code"]}</div>
          <div className="text">text</div>
        </div>
        <div className="patient-wrap">
          <div className="title">Member Status</div>
          <div className="text">{patient["Member Status"]}</div>
        </div>
        <div className="patient-wrap">
          <div className="title">Registered Date</div>
          <div className="text">{patient["Register Date"]}</div>
        </div>
      </div>
    </div>
  );
}
