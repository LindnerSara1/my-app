import React from "react";
import { useParams } from "react-router-dom";
const Help = () => {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <>
      <div>help!</div>
      <div>{projectId}</div>
    </>
  );
};
export default Help;
