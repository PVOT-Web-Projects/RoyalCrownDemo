"use client";

import { useFormik } from "formik";
import { form2Schemas } from "../ValidationSchema/Schema";
import "./form2.scss";
import SubmitButton from "@/components/buttons/submitButton/SubmitButton";

const Form2 = () => {
  const initialValue = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: form2Schemas,
    onSubmit: (action, value) => {
      action.resetForm();
      console.log("value", value);
    },
  });
  return (
    <div className="form2">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              onChange={handleChange}
              value={values.fName}
            />
            <p className="error">
              {touched.fName && errors.fName && errors.fName}
            </p>
          </div>
          <div className="field">
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lName}
            />
            <p className="error">
              {touched.lName && errors.lName && errors.lName}
            </p>
          </div>
          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />
            <p className="error">
              {touched.email && errors.email && errors.email}
            </p>
          </div>
          <div className="field">
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              value={values.phone}
            />
            <p className="error">
              {touched.phone && errors.phone && errors.phone}
            </p>
          </div>
          <div className="field">
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              value={values.message}
              rows={3}
            ></textarea>
            <p className="error">
              {touched.message && errors.message && errors.message}
            </p>
          </div>
          <div className="submit_btn">
            <SubmitButton btnName={"Send"} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form2;
