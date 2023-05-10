import React, { useEffect, useState } from "react";
import SinglePublicProject from "../singlePublibProject/SinglePublibProject";
import { getPublicProject } from "../../../api/project.api";
import "./publicProjects.css";
import { GlobalStyles } from "@mui/material";
export const PublicProjects = () => {
  const [publicProject, setPublicProject] = useState([]);

  const getPublicProjectFromServer = async () => {
    try {
      const data = await getPublicProject();
      setPublicProject(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPublicProjectFromServer();
  }, []);
  const [details, setDetails] = useState([
    {
      projectName: "projectName",
      goal: "goal",
    },
  ]);
  const updateDetails = (detail) => {
    setDetails([detail]);
  };
  return (
    <>
      <div id="boxPublicProject">
      {/* <div id="headerPublicProjects">פרויקטים ציבוריים</div> */}
        <div id="listPublicProject">
          {publicProject.length > 0 && publicProject.map((project, index) => (
            <div value={project} key={+index}>
              <SinglePublicProject
                updateDetails={updateDetails}
                myProject={project}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
