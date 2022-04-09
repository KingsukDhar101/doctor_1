import React, { useState, useEffect } from "react";
import "./appointment.css";
import { IoIosArrowUp } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import axios from "axios";

export default function Appointment() {
  const initial = {
    upcoming: {},
    post: {},
    medial: {},
  };

  const [app, setApp] = useState(initial);
  useEffect(() => {
    (async () => {
      let data = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details"
      );
      let appo = data.data[0];
      // console.log(upcoming);

      setApp({
        ...app,
        upcoming: appo["Upcoming Appointments"],
        post: appo["Post Appointment"],
        medial: appo["Medical Records"],
      });
      console.log(appo);
    })();
  }, []);
  return (
    <div className="appointment-container">
      <div className="header">
        <div className="tab active">Upcoming Appointments</div>
        <div className="tab">Upcoming Appointments</div>
        <div className="tab">Medical Records</div>
      </div>
      <div className="content-container">
        <div className="content-header">
          <div className="text">Root Canal Treatment</div>
          <div className="content-box">
            <div className="icon">
              <IoIosArrowUp />
            </div>
            <div className="text">Show Previous Treatment</div>
          </div>
        </div>
        <div className="content">
          <div className="content-box">
            <div className="date-time" style={{ flex: "1.5" }}>
              <div className="date">{app.upcoming.Date}</div>
              <div className="time">{app.upcoming.Time}</div>
            </div>
            <div className="line"></div>
            <div className="box" style={{ flex: "1.8" }}>
              <div className="smalltext">Treatment</div>
              <div className="bigtext md">{app.upcoming.Treatment}</div>
            </div>
            <div className="line"></div>
            <div className="box sm">
              <div className="smalltext">Dentist</div>
              <div className="bigtext">{app.upcoming.Dentist}</div>
            </div>
            <div className="box sm">
              <div className="smalltext">Nurse</div>
              <div className="bigtext">{app.upcoming.Nurse}</div>
            </div>
            <div className="note-box">
              <div className="icon">
                <CgNotes />
              </div>
              <div className="text">Note</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
