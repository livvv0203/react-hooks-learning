import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    // Transfrom from object to numbers
    const dataPointValues = props.dataPoints.map(
        dataPoint => dataPoint.value
    );
    const totalMaximum = Math.max(...dataPointValues); // Should be Looking like Math.max(1, 2, 3)

  return (
    <div className="chart">
      {/* Display Bars for each month */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
