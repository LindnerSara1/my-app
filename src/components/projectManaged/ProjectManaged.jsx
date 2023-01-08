import { Box, MenuItem, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getProjectManaged } from "../../api/project.api";
import { UserContext } from "../../context/User.context";
import Details from "../details/Details";
import "./projectManaged.css";
const ProjectManaged = () => {
  const { setUser, user } = useContext(UserContext);
  const [myProjectManaged, setMyProjectManaged] = useState([{}]);
  const getProjectManagedFromServer = async () => {
    try {
      const data = await getProjectManaged(user?.userId);
      setMyProjectManaged(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProjectManagedFromServer();
  }, []);
  const [details, setDetails] = useState([
    {
      projectName: "nj",
      goal: "uu",
    },
  ]);
  const updateDetails = (detail) => {
    setDetails([detail]);
  };
  return (
    <>

      {/* {Object.keys(details).map((key,i)=>(<div key={i}>{key}</div>))} */}
      {/* {Object.values(details).map((value,i)=>(<div key={i}>project name:{value.projectName}, goal: {value.goal}</div>))} */}

      {/* {Object.entries(details).map(([key,value])=>(<div>{key}: {value}</div>))} */}
      {/* {details.map(({projectName,i})=>(<div key={i}>{projectName}</div>))} */}
      <h1>פרויקטים בניהולי</h1>
      <div id="allProjectManaged">
        {/* <div> */}
        {myProjectManaged?.map((project, index) => (
          <div value={project} key={index}>
            <Details updateDetails={updateDetails} myProject={project} />
            {/* <Details myProject={myProjectManaged} i={i} updateDetails={updateDetails}></Details> */}
            {/* <button onClick=(()=>(</div>{<Details myProject={myProjectManaged} i={i}/>}))>{projectName}</button> */}
          </div>
        ))}
      </div>
    </>
  );
};
export default ProjectManaged;