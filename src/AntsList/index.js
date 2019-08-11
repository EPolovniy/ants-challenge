import React, { useState } from 'react';
import Ant from '../Ant';

import './antList.css'

import { generateAntWinLikelihoodCalculator as calc } from "../utils";

const AntsList = ({ ants, setChance, loading, error }) => {
  const [calcImmediately, setCalcImmediately] = useState(false);

  if (loading) return (<p className="loading">Loading...</p>);
  if (error) return (<p className="error">Error :(</p>);

  const onClickHandler = () => {
    setCalcImmediately(true);
  };

  const classForBtn = calcImmediately ?
    'btn-all disabled' :
    'btn-all';

  return (
    <div>
      <div
        className={classForBtn}
        onClick={onClickHandler}
      >
        Start all calculation
      </div>
      {ants.map(ant => {
        return (
          <Ant
            key={ant.name}
            ant={ant}
            calc={calc}
            calcImmediately={calcImmediately}
            setCalcImmediately={setCalcImmediately}
            setChance={setChance}
          />
        );
      })}
    </div>
  )
};

export default AntsList;
