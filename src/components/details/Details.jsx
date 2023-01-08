import './details.css';
const Details = ({ updateDetails, myProject, i }) => {
  console.log(myProject);
  let project = {
    projectName: "",
    goal: "",
  };
  const displayDetails = () => {
    project.projectName = myProject.projectName;
    project.goal = myProject.goal;
    updateDetails(project);
  };
  return (
    <div>
      {/* <button onClick={displayDetails}>{myProject.projectName}</button> */}
      <div id="projectHeader">
        <div>{myProject.kategoryValue}</div>
        <div>{myProject.goal}</div>
        <div>{myProject.personNameFor}</div>
      </div>
        <div>
        <div>{myProject.dueDate}</div>
        <div>{myProject.taskStatus}</div>
    </div>
    </div>
  );
};
export default Details;
