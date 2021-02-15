import React from 'react';
import './doughnut.styles.css';
import {Doughnut} from 'react-chartjs-2';

const Dough=({data})=>{
    // const datas=data
    // console.log(data)
 
      if(!data){
          return 'Loading...'
      }
    const state = {
        labels: ['Active','Deaths','Recovered'],
        datasets: [
          {
            label: 'covid',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [data[0].active,data[0].deaths,data[0].recovered]
          }
        ]
      }

      return(

          <div className="doughnut">
            <Doughnut
            data={state}
                options={{
                title:{
                    display:true,
                    text:'INDIA COVID-19 TRACKER',
                    fontSize:20,
                },
                legend:{
                    display:true,
                    position:'top'
                },
                }}
            /> 
          </div>

      )

}





export default Dough