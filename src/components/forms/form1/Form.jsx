"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { FormSchemas } from "@/components/forms/ValidationSchema/Schema";
import "./form.scss";
import YellowButton from "@/components/buttons/yellowButton/YellowButton";
import YellowSubmitButton from "@/components/buttons/yellowSubmitButton/YellowSubmitButton";

const MyForm = () => {
  const initialValue = {
    fullName: "",
    lastName: "",
    email: "",
    PhoneNo: "",
    message: "",
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: FormSchemas,
      validateOnBlur: false,
      validateOnChange: true,
      onSubmit: (values, action) => {
        console.log("value", values);
        emailjs
          .send(
            "service_en5qoij",
            "template_ycgs2m9",
            values,
            "fobUr4FlhTii3NWuL"
          )
          .then((response) => {
            console.log("Email sent successfully:", response);
          })
          .catch((error) => {
            console.error("Email send error:", error);
          });
        action.resetForm();
      },
    });

  useEffect(() => {
    const inputs = document.querySelectorAll(
      ".input-container input, .input-container textarea"
    );

    inputs.forEach((input) => {
      input.addEventListener("blur", (e) => {
        if (e.target.value) {
          e.target.classList.add("not-empty");
        } else {
          e.target.classList.remove("not-empty");
        }
      });

      if (input.value) {
        input.classList.add("not-empty");
      }
    });
  }, []);

  return (
    <div className="form">
      <div>
        <p className="form_header">The Authenticity of luxury in each layer</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form_field_flex">
            <div className="form_content">
              <div className="input-container">
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                />
                <label className="label" htmlFor="fullName">
                  First Name
                </label>
                <div className="underline"></div>
                {touched.fullName && errors.fullName && (
                  <p className="error">{errors.fullName}</p>
                )}
              </div>
            </div>
            <div className="form_content">
              <div className="input-container">
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                <label className="label" htmlFor="lastName">
                  Last Name
                </label>
                <div className="underline"></div>
                {touched.lastName && errors.lastName && (
                  <p className="error">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>
          <div className="form_field_flex">
            <div className="form_content">
              <div className="input-container">
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label className="label" htmlFor="email">
                  Email
                </label>
                <div className="underline"></div>
                {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="form_content">
              <div className="input-container">
                <input
                  id="PhoneNo"
                  type="text"
                  name="PhoneNo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.PhoneNo}
                />
                <label className="label" htmlFor="PhoneNo">
                  Phone Number
                </label>
                <div className="underline"></div>
                {touched.PhoneNo && errors.PhoneNo && (
                  <p className="error">{errors.PhoneNo}</p>
                )}
              </div>
            </div>
          </div>
          <div className="form_content">
            <div className="input-container">
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                className="message_field"
              />
              <label className="label" htmlFor="message">
                Message
              </label>
              <div className="underline"></div>
              {touched.message && errors.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>
          </div>
          <div className="submit-button">
            <YellowSubmitButton btn_text={"Send"} />
            {/* <button type="submit" className="submit_button">
            SEND
          </button>                                                      */}
          </div>
        </form>
      </div>
      <div className="form_footer">
        <div>
          We are known for providing high density laminates with unparalleled
          services in terms of quality and reliability. We are known for
          providing high.
        </div>
      </div>
    </div>
  );
};

export default MyForm;
