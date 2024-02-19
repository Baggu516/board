import { useEffect, useState } from "react";
import { CardList } from "./CardList";
import axios from "axios";
import "./CardWrapper.css";

export const CardWrapper = () => {
   const [mockData,setMockData]=useState([])
   useEffect(()=>{

   const getItems=async()=>{
      let response=await axios.get("http://localhost:5000/data/getdata")

      console.log("response",response.data)
      setMockData([...response.data.data])
   }
   getItems()

   },[])

    return (
        <div className="wrapper">
        {
            mockData.map((item,index)=><CardList data={item} key={index}/>)
        }
        </div>
    )
}