import { useEffect, useState } from "react";
import { CardList } from "./CardList";
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux'
import "./CardWrapper.css";
import { starting_request,data_fetch,failure_request,fetchposts } from '../redux/actions/fetchingActions'
export const CardWrapper = () => {
    const {loading,data,error}=useSelector(state=>state)
    const dispatch=useDispatch()
   const [mockData,setMockData]=useState([])
//    const getItems=async()=>{
//     let response=await axios.get("http://localhost:5000/data/getdata")

//     console.log("response",response.data)
//     setMockData([...response.data.data])
//  }
   useEffect(()=>{
      
    dispatch(fetchposts())
 
//    getItems()

   },[])

    return (
        <div className="wrapper">
        {
            data.map((item,index)=><CardList data={item} key={index} />)
        }
        </div>
    )
}