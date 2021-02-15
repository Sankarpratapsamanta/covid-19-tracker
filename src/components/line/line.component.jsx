import React from 'react';
import './line.styles.css'
import { Line } from "react-chartjs-2";

const LineChart=({day})=>{
    // console.log(day)


    if(!day){
        return 'Loading...'
    }
    const res = day.slice(300,307)
    // console.log(res)
    const lineData = {
        labels:  res.map(data=>data.date),
        datasets: [
          {
            label: "Active",
            data: res.map(data=>data.dailyconfirmed),
            fill: true,
            borderColor: "#a83c32",
          },
          {
            label:"Deaths",
            data: res.map(data=>data.dailydeceased),
            fill:true,
            borderColor:"#d6d013"
          },
          {
            label:"Recovered",
            data: res.map(data=>data.dailyrecovered),
            fill:true,
            borderColor:"#09b50c"
          }

        ]
      };
    return(
        <div className="line">
           <Line data={lineData} />
        
        </div>
       
    )
}

export default LineChart