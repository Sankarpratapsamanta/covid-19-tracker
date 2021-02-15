import React from 'react';
import './table.styles.css';

const TableData=({data})=>{
    
    if(!data){
        return 'Loading...'
    }
    const heading={
        state:'',
        confirmed:'',
        active:'',
        recovered:'',
        deceased:''

    }
    const res=data.slice(1)
    // console.log(res)
    function handleHover(e) {
        console.log(e)
      }
    function renderTableHeader () {
        return Object.keys(heading).map(attr => <th  className="table_head" key={attr}>{attr.toUpperCase()}</th>)
      }
      function renderTableBody(){
        return res.map(data => {
            return (
            <tr  onMouseOver={handleHover} >
                <td className='table_row-1'>{data.state}</td>
                <td className='table_row-2'>{data.confirmed}</td>
                <td className='table_row-3'>{data.active}</td>
                <td className='table_row-4'>{data.recovered}</td>
                <td className='table_row-5'>{data.deaths}</td>

            </tr>
        
            )
          })
      }
    return(
    <div className="table">
 
    <table className="tabledata">
    
        
        <thead>
            <tr>
                {renderTableHeader()}
            </tr>
        </thead>
        <tbody>
            {renderTableBody()}
        </tbody>
        
    </table>
    </div>
       
    )
}

export default TableData