import axios from "axios";

const url=' https://api.covid19india.org/data.json';

export const fetchData = async()=>{
    try {
        const {data:{statewise}}= await axios.get(url);
        const modifyData={
            alldata:statewise
        }
        return modifyData
    } catch (error) {
        
    }
}

export const handle7days = async()=>{
    try {
        const {data:{cases_time_series}}=await axios.get(url);
        const sevenData={
            cases_time_series
        }
        return sevenData
    } catch (error) {
        
    }
}