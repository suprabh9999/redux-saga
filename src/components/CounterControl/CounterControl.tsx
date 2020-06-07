import React from "react";

import "./CounterControl.css";

const counterControl = (props: { label: string; clicked: () => void }) => (
  <div className="CounterControl" onClick={props.clicked}>
    {props.label}
  </div>
);

export default counterControl;
