import React from 'react';

import './App.css';
import { Card} from './Card';

export default function App() {

  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ]

  return (
      <div className="App">

        <Card title="Car card :" outerData={topCars} />

      </div>
  );
}


