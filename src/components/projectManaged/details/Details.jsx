import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import convertToHebrewDate from "../../ConvertToHebrewDate";
import "./details.css";
const Details = ({ updateDetails, myProject, i }) => {
  const navigate = useNavigate();
  const [isLoading ,setIsLoading ] =useState(1);
  const [dueDate, setDueDate] = useState();
  const convertDate = async () => {
    const d = await convertToHebrewDate(myProject.dueDate);
    setDueDate(d);
    setIsLoading(0);
  };
  useEffect(() => {
    convertDate();
  }, []);
   if(isLoading){
    return <span>...Loading</span>
   }
   const sendMessage=()=>{
      
      navigate(`/projects/addNewMessage/${myProject.projectId}`);
    }
  return (
    <div>
     <div id="boxProjectManaged">
        {/* <button onClick={displayDetails}>{myProject.projectName}</button> */}
        <div id="projectManagedHeader">
          <div>{myProject.kategoryValue}</div>
          <div>{myProject.goal}</div>
          <div>{myProject.personNameFor}</div>
          <div>{myProject.projectId}</div>
        </div>
        <div>
          <div>{dueDate}</div>
          {/* <div>{<ConvertToHebrewDate date={myProject.dueDate}/>}</div> */}
          <div>{myProject.taskStatus}</div>
          <button onClick={sendMessage}>לשליחת הודעה לחברי הפרויקט</button>
        </div>
      </div>
    </div>
  );
};
export default Details;
