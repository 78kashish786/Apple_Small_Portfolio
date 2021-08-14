import React from "react";

import "./HeaderBlock.css";

function HeaderBlock({ bg, prd, price }) {
  return (
    <div className="headerBlock" style={{ backgroundImage: `url(${bg})` }}>
      <div className="headerBlock__info">
        <h1>{prd}</h1>
      </div>
      <div className="headerBlock__actions">
        <h4>
          {" "}
          Order Online at just <span>{price}</span>
        </h4>
        <button className="headerBlock__buttonPrimary">Buy Now</button>
      </div>
    </div>
  );
}
export default HeaderBlock;
