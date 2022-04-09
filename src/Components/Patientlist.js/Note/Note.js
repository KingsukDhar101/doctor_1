import React from 'react'
import "./note.css";
import { AiOutlineUser } from "react-icons/ai";

export default function Note() {
  return (
    <div className="note-container">
      <div className="note-top">
        <div className="bigtext">Notes</div>
        <div className="link">See all</div>
      </div>
      <div className="note-middle">
        <div className="smalltext">- line1</div>
        <div className="smalltext">- line1</div>
        <div className="smalltext">- line1</div>
      </div>
      <div className="note-bottom">
        <div className="title">Lorem ipsum dolor sit amet</div>
        <div className="note-wrap">
          <div className="left">
            <div className="icon">
              <AiOutlineUser />
            </div>
            <div>Drg. Mega Nanade</div>
          </div>
          <div className="right">20 Nov 2019</div>
        </div>
      </div>
    </div>
  );
}
