import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import AntsList from './AntsList';

import './App.css';

const App = () => {
  const [ants, setAnts] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  const setChance = (id, chance) => {
    const antArray = [...ants];
    antArray.find(ant => ant.id === id).chance = chance;
    setAnts(antArray.sort((a, b) => b.chance - a.chance));
  };

  const { loading, error, data } = useQuery(gql`
    {
      ants {
        name,
        color,
        length,
        weight,
      }
    }
  `);

  if (data && data.ants && firstLoad) {
    setFirstLoad(false);
    const arr = [];
    for (const ant of data.ants) {
      arr.push({
        ...ant,
        chance: 0,
        id: `f${(~~(Math.random()*1e8)).toString(16)}`,
      })
    }
    setAnts(arr);
  }

  return (
    <div className="app">
      <h2>Ants information <span role="img" aria-label=''>🐜</span></h2>
      <AntsList ants={ants} loading={loading} error={error} setChance={setChance} />
    </div>
  );
};

export default App;
