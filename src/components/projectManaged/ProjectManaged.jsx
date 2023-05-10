import React, { useContext, useEffect, useState } from "react";
import { getProjectManaged } from "../../api/project.api";
import { UserContext } from "../../context/User.context";
import Details from "./details/Details";
import "./projectManaged.css";
const ProjectManaged = () => {
  const { user, setUser } = useContext(UserContext);
  const [myProjectManaged, setMyProjectManaged] = useState([]);
  const getProjectManagedFromServer = async () => {
    try {
      if(user){
      const data = await getProjectManaged(user?.userId);
      setMyProjectManaged(data);
      console.log(data);}
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProjectManagedFromServer();
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
      <div id="boxAllProjectManaged">
        <h1>פרויקטים בניהולי</h1>
        <div id="allProjectManaged">
          {myProjectManaged.length > 0 &&
            myProjectManaged.map((project, index) => (
              <div value={project} key={+index}>
                <Details updateDetails={updateDetails} myProject={project} />
              </div>
            ))}
          {myProjectManaged.length === 0 && (
            <div id="noneProject">אין פרויקטים ממתינים עבורך</div>
          )}
        </div>
      </div>
    </>
  );
};
export default ProjectManaged;
