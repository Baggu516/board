import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Input } from '@mui/material';
import { Button } from '@mui/base';
import axios from 'axios';

export const CardItem = ({title, readOnly,id, setItems, updatedItems}) => {
  const [text,setText]=React.useState("")
  const handleAddItems=async()=>{
    try {
      let response =await axios.post("http://localhost:5000/board/additems",{id,text}) 
      console.log("response",response.data)
      updatedItems[updatedItems.length-1].readOnly = true;
      updatedItems[updatedItems.length-1].item = text;
      setItems([...updatedItems])
    } catch (error) {
    }
   
  }
  return (
    <Card sx={{ maxWidth: 345, marginTOp: 2, marginBottom: 2 }}>
      {readOnly ? <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      : <>
      <Input autoFocus onChange={(e)=>setText(e.target.value)}/>
       <Button onClick={handleAddItems}>
✅︎</Button>
      </> 
}
    </Card>
  );
}