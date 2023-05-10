import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import {
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import swal from "sweetalert";
import { submitMessage } from "../../api/message.api";
import { useParams, useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./Message.css";
const Message = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    projectId: projectId,
    header: "",
    body: "",
    dueDate: new Date(),
  });
  const handleEndDateChange = (newDate) => {
    if (newDate) {
      setMessage({ ...message, dueDate: newDate });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // message.projectId = projectId;
    // message.dueDate = message.dueDate.toJson();
    try {
      // setMessage({...message,dueDate:message.dueDate.toJSON()})
      // message.dueDate = message.dueDate.toJSON();
      // const dateToSend = message.dueDate.toJSON();
      const res = await submitMessage(
        message.projectId,
        message.header,
        message.body,
        message.dueDate.toJSON()
      );
      // if (res) {
        swal({
          title: "ההודעה נשמרה בהצלחה",
          text: "היא תשלח במועד שנבחר",
          icon: "success",
          button: "ok",
        });
        
        navigate(-1);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div id="form_message">
      <FormControl>
        <div>הקלד הודעה</div>
        <FormControl>
          <TextField
            id="headerMassage"
            label="header"
            multiline
            // minRows={5}
            onChange={(e) => {
              setMessage({ ...message, header: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="body"
            label="body"
            multiline
            onChange={(e) => {
              setMessage({ ...message, body: e.target.value });
            }}
            //   maxRows={4}
          />
        </FormControl>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="תאריך יעד"
              inputFormat="dd/MM/yyyy"
              value={message.dueDate}
              minDate={new Date()}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <Button type="submit" onClick={handleSubmit}>
          לשמירה
        </Button>
      </FormControl>
      </div>
    </>
  );
};
export default Message;
