import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { UserContext } from "../../../context/User.context";
import swal from "sweetalert";
import { updateTask } from "../../../api/tasks.api";
import { useState } from "react";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
const Select = (props) => {
  const { projectId, task, openSelect, setOpenSelect,savedInDb, setSavedInDb,updateInDisplay } = props;
  const { setUser, user } = useContext(UserContext);
  
  //   const handleClickOpen = () => {
  //     setOpenSelect(true);
  //   };

  const handleClose = () => {
    setOpenSelect(false);
  };
  const newTask = {
    userId: 0,
    taskId:0,
    taskStatusId: 0,
  };
  const agree = async () => {
    console.log("in agree");
     handleClose();
    try {
      newTask.userId = user.userId;
      newTask.taskId = task.taskId;
      newTask.taskStatusId = 2;
      const updatedTask = await updateTask(newTask);
      if (updatedTask) {
        // swal({
        //   title: "נקלט בהצלחה",
        //   text: "זכית להיות חלק משותפים+  אשריך!",
        //   icon: "success",
        //   button: "ok",
        // });
        setSavedInDb(true);
        console.log(updatedTask);
        updateInDisplay(updatedTask);
      }
    } catch (error) {
      console.log(error);
    }
   
  };
  const disagree = () => {
    console.log("in disagree");
    handleClose();
  };
  const selected = () => {
    swal({
      title: "הצטרפת, אשריך!",
      text: `בחרת לומר את ${task.kategoryValue}`,
      //   icon: "success",
      buttons: {
        disagree: { text: "לבחירת משימה אחרת", value: "disagree" },
        agree: { text: "אני מאשר", value: "agree" },
      },
    }).then((value) => (value === "agree" ? agree() : disagree()));
  };
  const saved =()=>{
    swal({
        title: " נקלט בהצלחה",
        text: "זכית להיות חלק משותפים+  אשריך!",
        icon: "success",
        button: "ok",
      });
  }
  return (
    <div>
      {openSelect && selected()}
      {savedInDb && saved()}
    </div>
  );
};

export default Select;

{
  /* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`בחרת לומר את ${task.kategoryValue}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
          </DialogContentText> 
        </DialogContent>
        <DialogActions>
          <Button onClick={agree}>אני מאשר</Button>
          <Button onClick={disagree}>לבחירת פרק אחר</Button>
        </DialogActions>
      </Dialog> */
}
