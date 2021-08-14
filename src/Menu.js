import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="menu">
      <h1>Countries</h1>
      <MenuItem item="United States" />
      <MenuItem item="India " />
      <MenuItem item="China" />
      <MenuItem item="Canada " />
      <MenuItem item="Brazil " />
      <MenuItem item="United Kingdom " />
      <MenuItem item="France" />
      <MenuItem item="Italy " />
    </div>
  );
}
