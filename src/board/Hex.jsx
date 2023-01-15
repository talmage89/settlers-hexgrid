import React from "react";
import "./Hex.scss";

export default function Hex() {
  let width = 100;
  let height = width * Math.sin((60 * Math.PI) / 180); // width * sin(60deg)

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  return (
    <div
      className="Hex"
      style={{
        width: width,
        height: height,
        backgroundColor: getRandomColor(),
      }}
    ></div>
  );
}
