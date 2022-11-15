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
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const NewProject = () => {
  // const { kategories } = useContext(KategoriesContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [newProject, setNewProject] = useState({
    managerId: user?.userId ?? 0,
    dueDate: new Date(),
    startDate: new Date(),
    kategoryId: "",
    kategoryName: "",
    quantity: 0,
    projectName: "",
    goal: "",
    personNameFor: "",
  });
  const goal = [
    "לעילוי נשמת",
    "לרפואה",
    "להצלחה",
    "לזיווג הגון",
    "לזרע של קיימא",
    "למטרה אחרת",
  ];
  const addProject = async (e) => {
    e.preventDefault();
    const res = await projectApi.addNewProject(newProject);
    console.log(res);
    navigate("/main");
  };
  const [kategories, setKategories] = useState([{}]);
  const getKategoriesFromServer = async () => {
    try {
      const data = await getKategories();
      setKategories(data);
      console.log(kategories.map(({ kategoryName }) => kategoryName));
    } catch (error) {
      console.error("anable to get kategories", error);
    }
  };
  useEffect(() => {
    getKategoriesFromServer();
  }, []);
  const formatDate = (date) => {
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    return `${year}-${month}-${day}`;
  };
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
    <div>
      <h1>new Project!</h1>
      <form class="form" onSubmit={addProject}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        // className={classes.fromDate}
        label="start-date"
        inputFormat="dd/MM/yyyy"
        value={newProject.startDate}
        minDate={new Date(Date.now())}
        onChange={handleStartDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <DesktopDatePicker
        // className={classes.toDate}
        label="end-date"
        inputFormat="dd/MM/yyyy"
        value={newProject.dueDate}
        minDate={new Date(Date.now())}
        onChange={handleEndDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
        <label class="label">שם הפרויקט</label>
        <input
          class="input"
          placeholder={"project name"}
          value={newProject.projectName}
          onChange={(e) => {
            setNewProject({ ...newProject, projectName: e.target.value });
          }}
        ></input>
        <label class="label">בחר אופן חלוקה</label>
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
        >
          {kategories.map(({ kategoryName }) => (
            <option>{kategoryName}</option>
          ))}
        </select>
        <label class="label">מטרת הלימוד</label>
        <select
          class="select"
          value={newProject.goal}
          onChange={(e) => {
            setNewProject({ ...newProject, goal: e.target.value });
          }}
        >
          {goal.map((t, i) => (
            <option key={i}>{t}</option>
          ))}
        </select>
        <label class="label">הלימוד לזכות</label>
        {/* <input
        class="input"
          value={newProject.personNameFor}
          onChange={(e) => {
            setNewProject({ ...newProject, personNameFor: e.target.value });
          }}
        ></input> */}
        <label class="label">תאריך יעד</label>
        <input
          class="input"
          type="date"
          value={newProject.dueDate}
          onChange={(e) => {
            setNewProject({ ...newProject, dueDate: e.target.value });
          }}
        />

        <label class="label">תאריך התחלה</label>
        <input
          class="input"
          type="date"
          value={newProject.startDate}
          onChange={(e) => {
            setNewProject({ ...newProject, startDate: e.target.value });
          }}
        />
        <label class="label">כמות ספרים</label>
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
        ></input>
        {/* <label>האם ברצונך לאפשר ללימוד להיות ציבורי?</label>
        <input class="input" type="checkbox" value={true}></input>
        <br></br>
        <label>הכנס את המילים של חברי הקבוצה</label>
        <input type="email"></input>
        <br />*/}
       
        <button type="submit">שמור</button>
      </form>
    </div>
  );
};
export default NewProject;
