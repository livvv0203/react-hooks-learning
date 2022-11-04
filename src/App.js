import React, { useCallback, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import './App.css';
import { GanttChart } from './GanttChart';
import { MapChart } from './MapChart';

import axios from 'axios';

export const data = [
  ['Date', 'Customer-1-Volumn', 'Customer-2-Volumn', 'Costomer-3-Volumn'],
  ['Sun', 1000, 400, 500],
  ['Mon', 1170, 460, 800],
  ['Tue', 1170, 460, 800],
  ['Wed', 660, 2300, 3400],
  ['Thu', 1030, 540, 1800],
  ['Fri', 280, 300, 750],
  ['Sat', 1170, 460, 800],
];

export const options = {
  title: 'Performance Dashboard',
  hAxis: { title: 'Date', titleTextStyle: { color: '333' } },
  vAxis: { minValue: 0, maxValue: 4500 },
  chartArea: { width: '50%', height: '70%' },
};

function App() {
  const [volumnData, setVolumnData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const fetchDataHandler = useCallback(() => {
    axios
      .get(
        `https://api-shipgoodies.jd.com/api/1.0/order_volumn?customer_wild=trafi&date_range=cw`
      )
      .then((res) => {
        const data = res.data.data;
        // console.log(data.data);
        setVolumnData(data);
        // console.log(data);
      });
  });

  useEffect(() => {
    fetchDataHandler();
  }, []);

  // let testContent = 'Loading...';
  // let testV = "Loading Volumn..."

  // if (volumnData.length > 0) {
  //   testContent = volumnData[0].customer_name;
  //   testV = volumnData[0].volumn;

  //   console.log(volumnData);
  // }

  return (
    volumnData && (
      <div className="home-page">
        <select>
          <option>All Customer</option>
          <option>Customer 1</option>
          <option>Customer 2</option>
          <option>Customer 3</option>
          <option>Customer 4</option>
        </select>
        <select>
          <option>Current Week</option>
          <option>Past Week</option>
          <option>Current Month</option>
          <option>Past Month</option>
        </select>
        <br></br>
        <Chart
          chartType="AreaChart"
          width="650"
          height="500px"
          data={data}
          options={options}
        />
        {/* <div>{testContent} - { testV }</div> */}
        <ul>
          {volumnData.map((e) => (
            <li key={Math.random()}>
              {e.customer_name} - {e.date} - {e.volumn}
            </li>
          ))}
        </ul>
        {/* <GanttChart />
        <MapChart /> */}
      </div>
    )
  );
}

export default App;
