import React,{useEffect}from "react";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Input,
} from "@mui/material";
import "./Card.css"
import { CardItem } from "./CardItem";
import { useState } from "react";
import { MoreHoriz } from "@mui/icons-material";
import { useSelector,useDispatch } from 'react-redux'
import { starting_request,data_fetch,failure_request,fetchposts } from '../redux/actions/fetchingActions'
import axios from "axios";
export const CardList = ({ data }) => {
  const { heading, items = [], _id,color} = data;
  const filteredList = items.map((item) => ({ item, readOnly: true }));
  const [updatedItems, setItems] = useState(filteredList);
  const dispatch=useDispatch()
  const [headingopen,setHeadingOpen]=useState(true)
  const [temp,setTemp]=useState(heading)
  const handleAdd = () => {

    setItems([...updatedItems, { item: "", readOnly: false }]);

  };

const handleHeadingChange=async()=>{
    let response=await axios.post("http://localhost:5000/board/additemheading",{id:_id,text:temp})
    console.log(response.data)
    setHeadingOpen(true)
    
}
useEffect(()=>{
    dispatch(fetchposts())
})

  return (
    <Card
      sx={{ minWidth: 300, padding: 2, marginRight: 3, alignSelf: "start" }}
      style={{borderTop:`3px solid ${color}`}}
      className="card"
      key={_id}
    >
        {(headingopen==true)?<CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreHoriz />
            </IconButton>
          }
          title={heading}
          onClick={()=>setHeadingOpen(false)}
        />:<>
            <Input autoFocus onChange={(e)=>setTemp(e.target.value)} defaultValue={heading}/>
       <Button onClick={handleHeadingChange}>
✅︎</Button>
        </>}
      {updatedItems?.map(({ item, readOnly }, index) => (
        // <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <CardItem
          id={_id}
          title={item}
          readOnly={readOnly}
          setItems={setItems}
          updatedItems={updatedItems}
          index={index}
        />
        // <p>X</p>
    //   </div>
      ))}
      <CardActions>
        <Button size="small" color="primary" onClick={handleAdd}>
          + Add a Card
        </Button>
      </CardActions>
    </Card>
  );
};
