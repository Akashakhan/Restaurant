import React, { useState, useEffect, useReducer } from "react";
import "./style.css";

const UseState = () => {
  //   const [num, setNum] = useState(10);
  const reducer = (state, action) => {
    if (action.type === "INCR") {
      return state + 1;
    }
    if (state > 0 && action.type === "DCR") {
      return state - 1;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, 10);

  useEffect(() => {
    document.title = `Counter(${state})`;
  });

  return (
    <div className="center_div">
      <p>{state}</p>
      <div onClick={() => dispatch({ type: "INCR" })} className="button2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Increase Number
      </div>
      <div onClick={() => dispatch({ type: "DCR" })} className="button2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Decrease Number
      </div>
    </div>
  );
};

export default UseState;
