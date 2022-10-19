import React from 'react';
import { Chart } from 'react-google-charts';
import './App.css';
import GanttChart from './GanttChart';
import { MapChart } from './MapChart';

export const data = [
  ['Date', 'Customer-1-Volumn', 'Customer-2-Volumn', 'Costomer-3-Volumn'],
  ['Mon', 1000, 400, 500],
  ['Tue', 1170, 460, 800],
  ['Wed', 660, 1120, 300],
  ['Thu', 1030, 540, 1800],
  ['Fri', 280, 300, 750]
];

export const options = {
  title: 'Performance Dashboard',
  hAxis: { title: 'Date', titleTextStyle: { color: '333' } },
  vAxis: { minValue: 0 },
  chartArea: { width: '50%', height: '70%' },
};

function App() {
  return (
    <div className='home-page'>
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
      {/* <GanttChart />
      <MapChart /> */}
    </div>
  );
}

export default App;
