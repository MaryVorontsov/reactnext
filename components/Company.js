import React from "react";
function Company(props) {
  return (
    <div
      className="company"
      style={{
        backgroundColor: props.color, 
        color: props.textColor|| 'black',
      }}
    >
      <div>company {props.name}</div>
      <div>address {props.address}</div>
    </div>
  );
}
export default Company;