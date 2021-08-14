import React from "react";
import "./MenuItem.css";
export default function MenuItem({ item }) {
  return (
    <div className="menuItem">
      <h3>{item}</h3>
    </div>
  );
}
