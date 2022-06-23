import React from 'react';

import './App.css';
import {Card} from './Card';

function App() {

  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ]

  return (
      <div className="App">

          <h1>Car cards :</h1>
          <table>
              <tr>
                  <th>Car card </th>
                  <th>Manufacturer</th>
                  <th>Model</th>
              </tr>
                <Card title="Car card :" outerData={topCars} />
          </table>

      </div>
  )
}
export default App