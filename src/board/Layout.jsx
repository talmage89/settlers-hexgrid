import React from "react";
import Hex from "./Hex";
import "./Layout.scss";

export default function Layout() {
  // props
  let width = 100;
  let small = false;

  let offset = width / 4;

  function hexColumn(amount, lastColumn = false) {
    return (
      <div
        className="Layout__column"
        style={{ marginRight: lastColumn ? "" : -offset }}
      >
        {[...Array(amount)].map(() => {
          return <Hex />;
        })}
      </div>
    );
  }

  function smallBoard() {
    return (
      <>
        {hexColumn(3)}
        {hexColumn(4)}
        {hexColumn(5)}
        {hexColumn(4)}
        {hexColumn(3, true)}
      </>
    );
  }

  function largeBoard() {
    return (
      <>
        {hexColumn(3)}
        {hexColumn(4)}
        {hexColumn(5)}
        {hexColumn(6)}
        {hexColumn(5)}
        {hexColumn(4)}
        {hexColumn(3, true)}
      </>
    );
  }

  return <div className="Layout">{small ? smallBoard() : largeBoard()}</div>;
}
