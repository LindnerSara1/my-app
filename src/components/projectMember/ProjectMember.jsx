import React, { useContext, useEffect, useState } from "react";
import { getProjectMember } from "../../api/project.api";
import { UserContext } from "../../context/User.context";
import MemberDetails from "./MembersDetails.jsx/MemberDetails";
import "./projectMember.css";

const ProjectMember = (props) => {
  const { taskToInsert, updateTaskStatus } = props;
  const { setUser, user } = useContext(UserContext);
  const [myProjectMember, setMyProjectMember] = useState([]);
  const [updateListToDo, setUpdateListToDo] = useState(false);
  const getProjectMemberFromServer = async () => {
    try {
      if (user) {
        const data = await getProjectMember(user?.userId);
        setMyProjectMember(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setMyProjectMember([]);
    getProjectMemberFromServer();
  }, [taskToInsert]);

  // useEffect(() => {
  //   if (taskToInsert) {
  // const data = [...myProjectMember];
  // const indexToInsert = sortedIndex(data,taskToInsert);
  // const newData=data;
  // setMyProjectMember(newData);
  //   }
  // }, [taskToInsert]);

  const [details, setDetails] = useState();
  const updateDetails = (task) => {
    // const index = myProjectMember.findIndex((t) => t.taskId === task.taskId);
    // const copyMyProjectMember = [...myProjectMember];
    // copyMyProjectMember[index] = task;
    // setMyProjectMember(copyMyProjectMember);

    const index = myProjectMember.findIndex(
      (t) => t.taskStatusId === 3 && t.taskId === task.taskId
    );
    const copyMyProjectMember = [...myProjectMember];
    copyMyProjectMember.splice(index, 1);
    setMyProjectMember(copyMyProjectMember);
    updateTaskStatus(myProjectMember[index]);
  };
  return (
    <>
      {/* {Object.values(details).map((value,i)=>(<div key={i}>taskId:{value.taskId}, userId: {value.userId}</div>))}    */}
      <div id="boxProjectMember">
        <h1>המשימות שלי</h1>
        <div id="allProjectMember">
          {myProjectMember.length > 0 &&
            myProjectMember.map((project, index) => (
              <div value={project} key={+index}>
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
