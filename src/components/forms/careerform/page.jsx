"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { careerFormSchemas } from "../ValidationSchema/Schema";
import { Dropdown } from "primereact/dropdown";
import YellowSubmitButton from "@/components/buttons/yellowSubmitButton/YellowSubmitButton";
import "./Careerform.scss";

const CareerForm = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const brands = [
    { label: "Business Man", value: "all" },
    { label: "Other", value: "Other" },
    { label: "Other Option 1", value: "Other Option 1" },
    { label: "Other Option 2", value: "Other Option 2" },
    { label: "Other Option 3", value: "Other Option 3" },
  ];
  const city = [
    { label: "Select Your City", value: "all" },
    { label: "Ahmedabad", value: "Ahmedabad" },
    { label: "Surat", value: "Surat" },
    { label: "Morbi", value: "Morbi" },
    { label: "Jamnagar", value: "Jamnagar" },
  ];
  const handleBrandChange = (e) => {
    setSelectedBrand(e.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.value);
  };
  const initialValue = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    TellUs: "",
    CompanyName: "",
    SelectCity: "",
    postcode: "",
    privacyPolicy: false,
  };

  const { errors, values, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: careerFormSchemas,
    onSubmit: (action, value) => {
      console.log("value", value);
      action.resetForm();
    },
  });
  return (
    <div className="form-container">
      <div className="SecondFormContainer">
        <h2 className="CareerHeader">About You</h2>
        <form onSubmit={handleSubmit} className="CareerForm">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
              <p className="error">
                {touched.firstName && errors.firstName && errors.firstName}
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
              <p className="error">
                {touched.lastName && errors.lastName && errors.lastName}
              </p>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                placeholder="Your Phone Number"
              />
              <p className="error">
                {touched.phoneNumber &&
                  errors.phoneNumber &&
                  errors.phoneNumber}
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                value={values.emailAddress}
                onChange={handleChange}
                placeholder="Your Email Address"
              />
              <p className="error">
                {touched.emailAddress &&
                  errors.emailAddress &&
                  errors.emailAddress}
              </p>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="TellUs">Tell us who you are</label>
              <Dropdown
                name="TellUs"
                options={brands}
                value={selectedBrand}
                onChange={handleBrandChange}
                placeholder="Business man"
                className="career-select"
              />
              <p className="error">
                {touched.TellUs && errors.TellUs && errors.TellUs}
              </p>
            </div>
          </div>
          {/*  */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="CompanyName">Company Name</label>
              <input
                type="text"
                name="CompanyName"
                placeholder="Your Company Name"
              />
              <p className="error">
                {touched.CompanyName &&
                  errors.CompanyName &&
                  errors.CompanyName}
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="SelectCity">Select City</label>
              <Dropdown
                name="SelectCity"
                options={city}
                value={selectedCity}
                onChange={handleCityChange}
                placeholder="Business man"
                className="career-select"
              />
              <p className="error">
                {touched.SelectCity && errors.SelectCity && errors.SelectCity}
              </p>
            </div>
          </div>
          {/*  */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="postcode">Post code and full Address</label>
              <input
                type="text"
                name="postcode"
                placeholder="Enter Address & Code"
              />
              <p className="error">
                {touched.postcode && errors.postcode && errors.postcode}
              </p>
            </div>
          </div>
          <div className="form-row checkbox-row">
            <input
              type="checkbox"
              name="privacyPolicy"
              onChange={handleChange}
              checked={values.privacyPolicy}
            />

            <label htmlFor="privacyPolicy">
              I agree with your Privacy Policy.
            </label>
          </div>
          {/* <p className="error">
              {touched.privacyPolicy &&
                errors.privacyPolicy && 
                errors.privacyPolicy}
            </p> */}
          <div>
            <YellowSubmitButton btn_text={"Submit"} />
          </div>
          {/* <button type="submit">GET STARTED</button> */}
        </form>
      </div>
    </div>
  );
};
export default CareerForm;
