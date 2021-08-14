import React from "react";

import "./ButtonSecondary.css";

export default function ButtonSecondary({ name, type, onClick }) {
  return <button className="buttonSecondary">{name}</button>;
}
