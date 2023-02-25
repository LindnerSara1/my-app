import React, { useContext, useEffect, useState } from "react";
import { getProjectMember } from "../../api/project.api";
import { UserContext } from "../../context/User.context";
import MemberDetails from "./MembersDetails.jsx/MemberDetails";
import "./projectMember.css";

const ProjectMember = () => {
  const { setUser, user } = useContext(UserContext);
  const [myProjectMember, setMyProjectMember] = useState([{}]);
  const getProjectMemberFromServer = async () => {
    try {
      const data = await getProjectMember(user?.userId);
      setMyProjectMember(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProjectMemberFromServer();
  }, []);
  const [details, setDetails] = useState();

  const updateDetails = (task) => {
    const index = myProjectMember.findIndex((t) => t.taskId === task.taskId);
    const copyMyProjectMember = [...myProjectMember];
    copyMyProjectMember[index] = task;
    setMyProjectMember(copyMyProjectMember);
  };
  return (
    <>
      {/* {Object.values(details).map((value,i)=>(<div key={i}>taskId:{value.taskId}, userId: {value.userId}</div>))}    */}
      <div id="boxProjectMember">
        <h1>המשימות שלי</h1>
        <div id="allProjectMember">
          {myProjectMember?.map((project, index) => (
            <div value={project} key={index}>
              <MemberDetails
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
export default ProjectMember;
