import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
} from "@mui/material";
import { Button } from "@mui/base";
import "./Card.css";
import axios from "axios";
import dayjs from "dayjs";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { margin } from "@mui/system";
export const CardItem = ({ title, readOnly, id, setItems, updatedItems }) => {
  const [text, setText] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState();
  const [description,setDescription]=React.useState(true)
  const [descriptiontext,setDescriptionText]=React.useState("")
  // console.log(value)
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleAddItems = async () => {
    try {
      let response = await axios.post("http://localhost:5000/board/additems", {
        id,
        text,
      });
      console.log("response", response.data);
      updatedItems[updatedItems.length - 1].readOnly = true;
      updatedItems[updatedItems.length - 1].item = text;
      setItems([...updatedItems]);
    } catch (error) {}
  };
  const handleClose = () => {
    setOpen(false);
  };
  const saveDescription=()=>{

  }
  return (
    <Card sx={{ maxWidth: 345, marginTOp: 2, marginBottom: 2 }}>
      {readOnly ? (
        <CardActionArea>
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              onClick={() => setOpen(true)}
            >
              {title}
            </Typography>
          </CardContent>
          <Dialog
            open={open}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            className="dialogue"
          >
            <DialogTitle>
              <div>
              Project Planning
              <p style={{padding:"0px",margin:"0px",opacity:0.7,fontSize:"13px"}}> in list <b>{title}</b> </p>
              </div>
             

            </DialogTitle>
            <DialogContent>
              <p>Description</p>
              {(description==true)?<Typography
              variant="body2"
              color="text.secondary"
              style={{backgroundcolor:"grey"}}
              onClick={() => setDescription(false)}
            >
              {title}
            </Typography>:<>
            <Input onChange={(e)=>setDescriptionText(e.target.value)} defaultValue={"Enter Description"}></Input>
            <div>
              <Button variant="contained" color="primary" onClick={saveDescription}>save</Button>
              <Button onClick={()=>setDescription(true)}>cancel</Button>
            </div></>}
            <Autocomplete
      options={options}
      style={{marginTop:"50px"}}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Nomine"
          variant="outlined"
        />
      )}
    />
              <DialogContentText
                id="alert-dialog-slide-description"
                className="text"
                style={{marginTop:"50px"}}
              >
               
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DateTimePicker
                      value={date}
                      onChange={(newDate) => {
                        console.log(newDate)
                        setDate(dayjs(newDate.$d).format('DD-MM-YYYY hh:mm:ss')) }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                {/* <TimePicker onChange={onChange} value={value} /> */}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={handleClose} style={{padding:"10px"}}>save</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
            </DialogActions>
          </Dialog>
        </CardActionArea>
      ) : (
        <>
          <Input autoFocus onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleAddItems}>✅︎</Button>
        </>
      )}
    </Card>
  );
};
