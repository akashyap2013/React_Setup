import React, { Component } from "react";

let Comp = props => {
  return (
    <div className='displayinline col-md-12 '>
      <h2>Component is {props.value}</h2>
    </div>
  );
};

export default Comp;
