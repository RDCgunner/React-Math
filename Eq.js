import React, { useState } from "react";
import "./eq.css";

const EachEQ = (props) => {
  const [rez, setRez] = useState(0);
  var printer = "";
  var rezultat = 0;
  // const nota=useRef(0);
  // const incrementNota = () => {
  // nota.current=nota.current+1;}

  var num1 = props.equat.num1;
  var num2 = props.equat.num2;

  if (num1 >= num2) {
    rezultat = num1 - num2;
  } else {
    rezultat = num1 + num2;
  }
  if (num1 >= num2) {
    printer = `${num1} - ${num2}`;
  } else {
    printer = `${num1} + ${num2}`;
  }

  const corectie = () => {
    if (props.rezolva == false) {
      return null;
    } else {
      if (rezultat == rez) {
        return (
          <div>
            <div className={"da"}>BRAVO</div>
            {(props.arrNum1[props.index1].corect = true)}
          </div>
        );
      } else {
        return (
          <div className={"nu"}>
            Gresit, rezultatul corect este <b>{rezultat}</b>
          </div>
        );
      }
    }
  };

  return (
    <div className={"equation"}>
      {printer} =
      {props.rezolva ? (
        <div>
          Ai raspuns <b>{rez}</b>
        </div>
      ) : (
        <input
          type="number"
          className={"input"}
          value={rez}
          onChange={(e) => setRez(e.target.value)}
          placeholder="rezultat"
        ></input>
      )}
      {corectie()}
    </div>
  );
};

export default EachEQ;
