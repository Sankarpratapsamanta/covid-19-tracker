import React from 'react'
import './App.css';
import Dough from "./components/doughnut/doughnut.component";
import LineChart from "./components/line/line.component";
import TableData from "./components/table/table.component";
import Boxes from "./components/boxes/boxes.component";
import {fetchData , handle7days} from "./api/index";

class App extends React.Component {

  state={
    data:{},
    day:{}
  }

  async componentDidMount(){
    const fetchedData= await fetchData();
    // console.log(fetchedData)
    this.setState({data: fetchedData})

    const sevenDaysData= await handle7days();
    // console.log(sevenDaysData)
    this.setState({day:sevenDaysData})
  
  }

  render(){
    const {data,day}=this.state
    return (
      <div className="App">
        <div className="dough_line">
        <Dough data={data.alldata}/>
          <LineChart day={day.cases_time_series} />
        </div>
        <div className="table_boxes">
          <TableData data={data.alldata} />
          <Boxes data={data.alldata} />
        </div>
      </div>
    );
  }

}

export default App;
