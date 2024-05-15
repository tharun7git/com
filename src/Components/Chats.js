import React from "react";
import "./Chats.css";

function Chats() {
  const QR = () => {
    alert("QR");
  };

  return (
    <div className="name">
      <div className="n">Whatsapp</div>
      <div className="head">
        <button onClick={QR}>QR</button>
        <button onClick={QR}>Cam</button>
        <button onClick={QR}>:::</button>
        <div className="bar">
          <label htmlFor="fname"></label>
          <br />
          <input type="text" id="fname" name="fname" value="Search" />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Chats;
