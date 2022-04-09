import React from "react";
import "./patientlist.css";
import Header from "./Header/Header";
import Patient from "./Patientinfo/Patient";
import Note from "./Note/Note";
import Appointment from "./Appointment/Appointment";
import File from "./File/File";

export default function Patientlist() {
  return (
    <div className="patientlist-container">
      <Header />
      <div className="wrap">
        <div className="wrap-left">
          <div className="patient">
            <Patient />
          </div>
          <div className="appointment">
            <Appointment />
          </div>
        </div>
        <div className="wrap-right">
          <div className="note">
            <Note />
          </div>
          <div className="file">
            <File />
          </div>
        </div>
      </div>
    </div>
  );
}
