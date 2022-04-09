import React, { useState, useEffect } from "react";
import "./file.css";
import { AiOutlineFileText } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import axios from "axios";

export default function File() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/Files"
      );
      let filedata = data.data[0].files;
      console.log(filedata);
      setFiles(filedata);
    })();
  }, []);
  return (
    <div className="file-container">
      <div className="note-top">
        <div className="bigtext">Notes</div>
        <div className="link">Add Files</div>
      </div>
      {files.length > 0 &&
        files.map((file, index) => (
          <div className="file-wrap" key={index}>
            <div className="icon">
              <AiOutlineFileText />
            </div>
            <div className="filename">filename</div>
            <div className="wrapper-right">
              <div className="file-wrap-control">
                <div className="icon deleteicon">
                  <RiDeleteBinLine />
                </div>
                <div className=" icon downloadicon">
                  <MdOutlineFileDownload />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
