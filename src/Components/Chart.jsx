import React, {useState} from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import styled from "styled-components";

const BarWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`


const ChartBar = () => {

    const [data, setData] = useState({
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'New Patients',
          backgroundColor: '#3598dc',
          borderColor: '#3598dc',
          borderWidth: 4,
          width: '1px',
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40, 35, 60,90,46, 54]
        },

        {
          label: 'Old Patients',
          backgroundColor: 'rgba(255,99,132,1)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [15, 9, 90, 72, 26, 53, 60, 56, 55, 40, 35, 46]
        }, 
        {
        label: 'Old Patients',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 3,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [15, 9, 90, 72, 26, 53, 60, 15, 9, 90, 72, 63]
          }
      ],
      
    });

    return(
        <BarWrapper>
            <Bar
            data={data}
            />
        </BarWrapper>
    );                       

}

export default ChartBar;