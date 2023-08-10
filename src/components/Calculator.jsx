import React, { useState } from "react";
import { operations, getNumbers } from "../utils/calculator";
import styles from "../styles/Calculator.module.css";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operationsArray = [];

  operations.map((el) => {
    operationsArray.push(el.op);
  });

  const updateCalc = (value) => {
    if (
      (operationsArray.includes(value) && calc === "") ||
      (operationsArray.includes(value) &&
        operationsArray.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operationsArray.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLastDigit = () => {
    if (calc === "") return;
    setCalc(calc.slice(0, -1));
  };

  return (
    <div className={styles.calculator}>
      <div className="container">
        <div className={styles.calculatorInner}>
          <div className={styles.display}>
            {result ? <span>({result})</span> : ""} {calc || "0"}
          </div>
          <div className={styles.operation}>
            {operations.map((el) => (
              <button
                onClick={() => updateCalc(`${el.op}`)}
                className={styles.operationBtn}
                key={el.id}>
                {el.op}
              </button>
            ))}
            <button onClick={deleteLastDigit} className={styles.operationBtn}>
              del
            </button>
          </div>
          <div className={styles.digits}>
            {getNumbers().map((el) => (
              <button
                onClick={() => updateCalc(`${el}`)}
                className={styles.digitsBtn}
                key={el}>
                {el}
              </button>
            ))}
            <button
              onClick={() => updateCalc(".")}
              className={styles.digitsBtn}>
              .
            </button>
            <button
              onClick={() => updateCalc("0")}
              className={styles.digitsBtn}>
              0
            </button>
            <button onClick={calculate} className={styles.digitsBtn}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
