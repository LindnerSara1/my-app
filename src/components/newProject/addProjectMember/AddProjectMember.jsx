import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./addProjectMember.css";
import { useParams } from "react-router-dom";
import { addEmails } from "../../../api/project.api";
import { emailDTO } from "../../../Models/emailDTO";
// import ConvertToString from "./ConvertToString";
// const addInput=()=>{
//   setArrInput([
//     ...arrInput,
//     <TextField
//     fullWidth
//     id="email"
//     name="email"
//     label="Email"
//     value={formik.values.email}
//     onChange={formik.handleChange}
//     error={formik.touched.email && Boolean(formik.errors.email)}
//     helperText={formik.touched.email && formik.errors.email}
//   />,
//   ]);
//   setNewInput(newInput + 1);
// }

const AddProjectMember = () => {
  const projectId = useParams();
  const [newInput, setNewInput] = useState(0);
  const [arrInput, setArrInput] = useState([]);

  const FormSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
  });

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !"/^[A-Z0-9._%+-]" +
      "@[A-Z0-9.-]" +
      ".[A-Z]{2,4}$/i".test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      // arrInput.map((mail,i)=>(
      //  errors.email && touched.email ?
      //       <span key={i} className="inputError">{errors.email}</span>:null
      // ))
      addEmails(projectId, arrInput);
      alert(JSON.stringify(values, null, 2));
    },
  });
const convertToString = (email) =>{
  return `{"email": ${email}}`;
}
const postEmails = async() => {
  console.log(arrInput);
  let arrToSend = await arrInput.map((e,i)=>(document.querySelectorAll("#email")[i].value))
  console.log(arrToSend);

  arrToSend =  arrToSend.map(a=>(convertToString(a)));
  // arrToSend =  JSON.stringify(arrToSend);
  // <ConvertToString word={} />
  console.log(arrToSend);
  addEmails(projectId, arrToSend);
}
  return (

    <div>
      <div>הרישום נקלט בהצלחה!!! </div>
      <div>הכנס חברים לפרויקט</div>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <button
          onClick={() => {
            setArrInput([
              ...arrInput,
              <input
                key={newInput}
                id="email"
                type="email"
                name="email"
                // onChange={(e) => {
                //   handleChange();
                //   setArrInput([...arrInput, e.target.value]);
                // }}
                onChange={handleChange}
                values={values.email}
                required
              />,
            ]);
            setNewInput(newInput + 1);
          }}
        >
          +
        </button>

        <div>
          {arrInput.map((input, i) => (
            <div key={+i}>
              {i + 1}
              {input}

              {/* {errors.email && touched.email && (
                <span key={i} className="inputError">
                  {errors.email}
                </span>
              )} */}
            </div>
          ))}
        </div>

        <button type="button" onClick={postEmails}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddProjectMember;
