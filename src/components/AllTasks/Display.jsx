import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./display.css";
const Display = (props) => {
  const task = props.myTask;
  
  return (
    <>
      {/* <div id="#displayTask">
        <div>{myTask.kategoryValue}</div>
        <div>{myTask.goal}</div>
        <div>{myTask.personNameFor}</div>
        <div>{myTask.taskStatus}</div>
        <div>{myTask.dueDate}</div>
      </div> */}
      <TableContainer sx={{width: 200}}>
        <Table>
            <TableHead></TableHead>
            <TableRow>
                <TableCell>{task.kategoryValue}</TableCell>
                <TableCell>{task.taskStatus}</TableCell>
            </TableRow>
        </Table>
    </TableContainer>
    </>
  );
};
export default Display;
