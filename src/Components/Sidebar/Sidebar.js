import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFilterCircle } from "react-icons/bs";
import axios from "axios";

export default function Sidebar() {
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    (async () => {
      let data = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails"
      );
      let doc = data.data[0];
      console.log(doc);
      setDoctor(doc);
    })();
  }, []);
  return (
    <div className="sidebar-container">
      <div className="small-container top">
        <img src="" alt="" />
        <div className="name-wrapper">
          <div className="bigtext">Zendenta</div>
          <div className="smalltext">Zendenta</div>
        </div>
        <div className="icon">
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="page-container">
        <div className="page-wrapper">
          <div className="icon">
            <BsFilterCircle />
          </div>
          <Link className="link" to="/overview">
            Overview
          </Link>
        </div>
        <div className="page-wrapper">
          <div className="icon">
            <BsFilterCircle />
          </div>
          <Link className="link" to="/calendar">
            Calendar
          </Link>
        </div>
        <div className="page-wrapper active">
          <div className="icon">
            <BsFilterCircle />
          </div>
          <Link className="link" to="/patientlist">
            Patient List
          </Link>
        </div>
        <div className="page-wrapper">
          <div className="icon">
            <BsFilterCircle />
          </div>
          <Link className="link" to="/messages">
            Messages
          </Link>
        </div>
        <div className="page-wrapper">
          <div className="icon">
            <BsFilterCircle />
          </div>
          <Link className="link" to="/paymentinfo">
            Payment Information
          </Link>
        </div>
        <div className="page-wrapper">
          <div className="icon">
            <BsFilterCircle />
          </div>
          <Link className="link" to="/settings">
            Settings
          </Link>
        </div>
      </div>
      <div className="small-container doctor">
        <img src="" alt="" />
        <div className="name-wrapper">
          <div className="bigtext">{doctor.name}</div>
          <div className="smalltext">{doctor.specification}</div>
        </div>
        <div className="icon">
          <RiArrowDownSLine />
        </div>
      </div>
    </div>
  );
}
