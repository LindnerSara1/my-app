import React, { useEffect, useState } from "react";
import Display from "./Display";
import { getAllTasks } from "../../api/tasks.api";
import { useParams } from "react-router-dom";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const AllTasks = () => {
  const { projectId } = useParams();
  const [allTasks, setAllTasks] = useState([{}]);
  const getAllTasksFromServer = async () => {
    try {
      debugger;
      const data = await getAllTasks(projectId);
      setAllTasks(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllTasksFromServer();
  }, []);
  //   const [details, setDetails] = useState([
  //     {
  //         kategoryValue : "",
  //         goal : "",
  //         personNameFor: "",
  //         taskStatus : 0,
  //         dueDate : new Date(),
  //     },
  //   ]);
  //   const updateDetails = (detail) => {
  //     setDetails([detail]);
  //   };
  return (
    <>
      <h1>all tasks</h1>
      {/* {console.log(allTasks)} */}
      <div id="allTasks">
        <div>{allTasks[0].goal}</div>
        <div>{allTasks[0].personNameFor}</div>
        <div>תאריך יעד {allTasks[0].dueDate}</div>
        
        <TableContainer sx={{width:200}}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>קטגוריה</TableCell>
            <TableCell>סטטוס המשימה</TableCell>
          </TableRow>
        </TableHead></Table></TableContainer>
        {allTasks?.map((task, index) => (
          <div value={task} key={index}>
            <Display myTask={task} />
          </div>
        ))}
      </div>
    </>
  );
};
export default AllTasks;
