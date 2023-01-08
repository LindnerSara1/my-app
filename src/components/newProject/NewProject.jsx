// import Checkbox from '/lib/checkbox/Checkbox';

import React, { useState, useContext } from "react";
import { KategoriesContext } from "../../context/Kategories.context";
import { UserContext } from "../../context/User.context";
import * as projectApi from "../../api/project.api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getKategories } from "../../api/kategories.api";
// import "./NewProject.css";
import {
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
  Box,
  Button,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
const NewProject = () => {
  // const { kategories } = useContext(KategoriesContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [newProject, setNewProject] = useState({
    managerId: user?.userId ?? 0,
    dueDate: new Date(),
    startDate: new Date(),
    kategoryId: "",
    quantity: 1,
    projectName: "",
    goal: "",
    personNameFor: "",
  });
  const goals = [
    "לעילוי נשמת",
    "לרפואה",
    "להצלחה",
    "לזיווג הגון",
    "לזרע של קיימא",
    "למטרה אחרת",
  ];
  const addProject = async (e) => {
    e.preventDefault();
    const res = await projectApi.addNewProject(
      newProject.managerId,
      newProject.dueDate.toJSON(),
      newProject.startDate.toJSON(),
      newProject.kategoryId,
      newProject.quantity,
      newProject.projectName,
      newProject.goal,
      newProject.personNameFor
    );
    console.log(res);
    navigate("/main");
  };
  const [kategories, setKategories] = useState([{}]);
  const getKategoriesFromServer = async () => {
    try {
      const data = await getKategories();
      setKategories(data);
      // console.log(kategories.map(({ kategoryName }) => kategoryName));
    } catch (error) {
      console.error("anable to get kategories", error);
    }
  };
  useEffect(() => {
    getKategoriesFromServer();
  }, []);

  const handleStartDateChange = (newDate) => {
    if (newDate) {
      setNewProject({ ...newProject, startDate: newDate });
      // dispatch(setSelectedFromDate(formatDate(newDate)));
    }
  };
  const handleEndDateChange = (newDate) => {
    if (newDate) {
      setNewProject({ ...newProject, dueDate: newDate });
      // dispatch(setSelectedToDate(formatDate(newDate)));
    }
  };

  return (
    <Box>
      <h1>new Project!</h1>
      {/* <FormControl class="form"> */}
      <FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            // className={classes.fromDate}
            label="תאריך התחלה"
            inputFormat="dd/MM/yyyy"
            value={newProject.startDate}
            minDate={new Date(Date.now())}
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            // className={classes.toDate}
            label="תאריך יעד"
            inputFormat="dd/MM/yyyy"
            value={newProject.dueDate}
            minDate={newProject.startDate}
            onChange={handleEndDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          required={true}
          id="outlined-basic"
          label="שם הפרויקט"
          variant="outlined"
          value={newProject.projectName}
          onChange={(e) => {
            setNewProject({ ...newProject, projectName: e.target.value });
          }}
        ></TextField>
        {/* <label class="label">שם הפרויקט</label>
        <input
          class="input"
          placeholder={"project name"}
          value={newProject.projectName}
          onChange={(e) => {
            setNewProject({ ...newProject, projectName: e.target.value });
          }}
        ></input> */}

        <FormControl>
          <InputLabel id="kategoryNameLabel">בחר אופן חלוקה</InputLabel>
          <Select
            // labelId="kategoryNameLabel"
            id="kategoryNameSelect"
            // value={newProject.kategoryName?newProject.kategoryName:""}
            label="בחר אופן חלוקה"
            value={kategories.find((k) =>
              k.kategoryId === newProject.kategoryId ? k.kategoryName : ""
            )}
            onChange={(e) => {
              const id = kategories.find(
                (p) => p.kategoryName === e.target.value
              ).kategoryId;
              setNewProject({
                ...newProject,
                kategoryId: id,
              });
            }}
          >
            {kategories.map(({ kategoryName, i }) => (
              <MenuItem key={i + kategoryName} value={kategoryName}>
                {kategoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* <label class="label">בחר אופן חלוקה</label>
        <select
          class="select"
          value={newProject.kategoryName}
          onChange={(e) => {
            const id = kategories.find(
              (p) => p.kategoryName === e.target.value
            ).kategoryId;
            setNewProject({
              ...newProject,
              kategoryId: id,
              kategoryName: e.target.value,
            });
          }}
        > */}
        {/* {kategories.map(({ kategoryName }) => (
            <option>{kategoryName}</option>
          ))}
        </select> */}

        <FormControl>
          <InputLabel id="goalLabel">מטרת הלימוד</InputLabel>
          <Select
            labelId="goalLabel"
            id="goalSelect"
            value={newProject.goal}
            onChange={(e) => {
              setNewProject({ ...newProject, goal: e.target.value });
            }}
          >
            {goals.map((goal, i) => (
              <MenuItem key={i + goal} value={goal}>
                {goal}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <label class="label">מטרת הלימוד</label>
        <select
          class="select"
          value={newProject.goal}
          onChange={(e) => {
            setNewProject({ ...newProject, goal: e.target.value });
          }}
        > */}
        {/* {goal.map((t, i) => (
            <option key={i}>{t}</option>
          ))}
        </select> */}
        <TextField
          id="outlined-basic"
          label="הלימוד לזכות"
          variant="outlined"
          value={newProject.personNameFor}
          onChange={(e) => {
            setNewProject({ ...newProject, personNameFor: e.target.value });
          }}
        ></TextField>
        {/* <label class="label">הלימוד לזכות</label> */}
        {/* <input
        class="input"
          value={newProject.personNameFor}
          onChange={(e) => {
            setNewProject({ ...newProject, personNameFor: e.target.value });
          }}
        ></input> */}
        {/* <label class="label">תאריך יעד</label>
        <input
          class="input"
          type="date"
          value={newProject.dueDate}
          onChange={(e) => {
            setNewProject({ ...newProject, dueDate: e.target.value });
          }}
        /> */}

        {/* <label class="label">תאריך התחלה</label>
        <input
          class="input"
          type="date"
          value={newProject.startDate}
          onChange={(e) => {
            setNewProject({ ...newProject, startDate: e.target.value });
          }}
        /> */}
        <TextField
          id="outlined-basic"
          label="כמות הספרים"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 10 } }}
          variant="outlined"
          value={newProject.quantity ? newProject.quantity : 1}
          onChange={(e) => {
            setNewProject({ ...newProject, quantity: e.target.value });
          }}
        ></TextField>
        {/* <label class="label">כמות ספרים</label>
        <input
          class="input"
          type={"number"}
          value={newProject.quantity}
          onChange={(e) => {
            setNewProject({
              ...newProject,
              quantity: parseInt(e.target.value),
            });
          }}
        ></input> */}
        {/* <label>האם ברצונך לאפשר ללימוד להיות ציבורי?</label>
        <input class="input" type="checkbox" value={true}></input>
        <br></br>
        <label>הכנס את המילים של חברי הקבוצה</label>
        <input type="email"></input>
        <br />*/}
        <Button variant="outlined" onClick={addProject}>
          שמור
        </Button>
      </FormControl>
    </Box>
  );
};
export default NewProject;
