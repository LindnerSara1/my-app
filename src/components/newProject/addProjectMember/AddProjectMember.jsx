import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./addProjectMember.css";
import { useParams } from "react-router-dom";
import { addEmails } from "../../../api/project.api";
import { emailDTO } from "../../../Models/emailDTO";
import { useNavigate } from "react-router-dom";

const AddProjectMember = () => {
  const { projectId } = useParams();
  const [newInput, setNewInput] = useState(0);
  const [arrInput, setArrInput] = useState([]);
  const navigate = useNavigate();

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
  const postEmails = async () => {
    let arrToSend = await arrInput.map(
      (e, i) => document.querySelectorAll("#email")[i].value
    );
    arrToSend = JSON.stringify(arrToSend);
    try {
      await addEmails(projectId, arrToSend);
      navigate("/main/home");
    } catch (error) {
      console.error(error);
    }
  };
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
