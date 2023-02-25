import React, { useContext, useEffect, useState } from "react";
import { getProjectInvited } from "../../api/project.api";
import { UserContext } from "../../context/User.context";
import Details from "../projectManaged/details/Details";
import SinglePublicProject from "../landingPage/singlePublibProject/SinglePublibProject";
import "./ProjectInvited.css";
const ProjectInvited = () => {
  const { user, setUser } = useContext(UserContext);
  const [myProjectInvited, setMyProjectInvited] = useState([{}]);
  const getProjectInvitedFromServer = async () => {
    try {
      const data = await getProjectInvited(user?.userId);
      setMyProjectInvited(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProjectInvitedFromServer();
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
      <div id="boxAllProjectInvited">
        <h1>הוזמנת להשתתף</h1>
        <div id="allProjectInvited">
          {myProjectInvited?.map((project, index) => (
            <div value={project} key={index}>
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
export default ProjectInvited;
