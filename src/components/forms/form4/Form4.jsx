"use client";

import Image from "next/image";
import image from "@/images/getInTouchImage.png";
import "./form4.scss";
import { useState } from "react";
import ClickHandler from "@/components/buttons/clickHandler/ClickHandler";
import { useFormik } from "formik";
import { form4Schemas } from "../ValidationSchema/Schema";
import YellowSubmitButton from "@/components/buttons/yellowSubmitButton/YellowSubmitButton";

const Form4 = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };
  const initialValue = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  };
  const { errors, touched, values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: form4Schemas,
  });
  return (
    <div className="form4">
      <div className="form4_inner">
        <div className={`wrapper ${showForm ? "show" : "hide"}`}>
          <div className="image">
            <Image src={image} alt="get in touch" />
          </div>
          <div className="form4_wrap">
            {/* <Form /> */}
            <div className="form4_wrap_inner">
              <h2>Let’s Get In Touch.</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
              <form onSubmit={handleSubmit}>
                <div className="field_wrap">
                  <div className="field">
                    <label htmlFor="fName">First Name</label>
                    <input
                      type="text"
                      name="fName"
                      value={values.fName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                    />
                    <span className="error">
                      {touched.fName && errors.fName && errors.fName}
                    </span>
                  </div>
                  <div className="field">
                    <label htmlFor="lName">Last Name</label>
                    <input
                      type="text"
                      name="lName"
                      value={values.lName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                    />
                    <span className="error">
                      {touched.lName && errors.lName && errors.lName}
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">E-mail Address</label>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address"
                  />
                  <span className="error">
                    {touched.email && errors.email && errors.email}
                  </span>
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                  />
                  <span className="error">
                    {touched.phone && errors.phone && errors.phone}
                  </span>
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Enter your Text here..."
                  ></textarea>
                  <span className="error">
                    {touched.message && errors.message && errors.message}
                  </span>
                </div>
                {/* <div className="field"> */}
                <div className="SubmitBtnOuter">
                  <YellowSubmitButton btn_text={"Submit"} type="submit" />
                </div>
                {/* <button type="submit">Submit</button> */}
                {/* </div> */}
              </form>
            </div>
          </div>
          <div className="btn">
            <ClickHandler
              btn_text={"Let’s Get In Touch."}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="right_image">
          <Image src={image} alt="get in touch" />
        </div>
      </div>
    </div>
  );
};
export default Form4;
