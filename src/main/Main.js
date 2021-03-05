import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainInput from "./MainInput";

import "./Main.scss";

export default function Main() {
  const defaultNumber = 25;
  const defaultUnit = "minute";
  const [unit, setUnit] = useState(defaultUnit);
  const [number, setNumber] = useState(defaultNumber);

  const handleNumberChange = (e) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value);
    setNumber(isNaN(value) ? number : value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <section className="Main">
      <h1 className="Main__title">타타타</h1>

      <section className="Main__content">
        <img src="/img/main-img.png" alt="Man grabbing timer pin" />
        <MainInput
          number={number}
          unit={unit}
          handleNumberChange={handleNumberChange}
          handleUnitChange={handleUnitChange}
        />
      </section>

      <section className="Main__button-container">
        <Link to={`/timer/${unit}/${number}`} className="Main__button--start">
          시작하기
        </Link>
      </section>
    </section>
  );
}
