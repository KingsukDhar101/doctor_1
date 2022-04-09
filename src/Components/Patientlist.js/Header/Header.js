import React from "react";
import "./header.css";
import { IoMdNotifications } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="wrapper">
          <div className="icon user">
            <AiOutlineUser />
          </div>
          <div className="bigtext">Diane Cooper</div>
          <div className="search-container">
            <div className="icon">
              <BiSearch />
            </div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="icon plus">
            <span>+</span>
          </div>
          <div className="icon notification">
            <span>
              <IoMdNotifications />
            </span>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="wrapper">
          <div className="patientlist">Patient List</div>
          <div className="icon">
            <MdOutlineArrowForwardIos />
          </div>
          <div className="name">Diane Cooper</div>
        </div>
      </div>
    </div>
  );
}
