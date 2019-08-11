import React, { useState, useEffect, useRef } from 'react';

import { CALC_STATUS } from '../utils';

import Status from './Status';

import './ant.css'

const Ant = ({ ant: { id, name, color, length, weight, chance }, calc, setChance, calcImmediately, setCalcImmediately }) => {
  const [calculateStatus, setCalculateStatus] = useState(CALC_STATUS.notRun);
  const handler = useRef();

  useEffect(() => {
    handler.current = onClickHandler;
  });

  useEffect(
    () => {
      if (calcImmediately) {
        handler.current();
      }
    },
    [calcImmediately]
  );

  const onClickHandler = () => {
    if (calculateStatus !== CALC_STATUS.inProgress) {
      setCalculateStatus(CALC_STATUS.inProgress);
      const createCalc = calc();
      createCalc((result) => {
        setChance(id, result);
        setCalculateStatus(CALC_STATUS.finish);
        setCalcImmediately(false);
      });
    }
  };

  const classForBtn = calculateStatus === CALC_STATUS.inProgress ?
    'btn disabled' :
    'btn';

  return (
    <div className="ant">
      <div className="info-wrap">
        <p>Name: {name}</p>
        <span className="info">
          <p>Color: {color}</p>
          <p>Length: {length}</p>
          <p>Weight: {weight}</p>
        </span>
      </div>
      <span
        className={classForBtn}
        onClick={onClickHandler}
      >
        Get chance
      </span>
      <Status
        calculateStatus={calculateStatus}
        chance={chance}
      />
    </div>
  );
};

export default Ant;
