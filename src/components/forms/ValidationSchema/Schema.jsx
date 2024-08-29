import * as Yup from "yup";

export const FormSchemas = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    PhoneNo: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
});
export const form2Schemas = Yup.object({
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
});
export const form3Schemas = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
})
export const form4Schemas = Yup.object({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});
export const careerFormSchemas = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  emailAddress: Yup.string().email("Invalid email address").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
    TellUs: Yup.string().required("Please Select Value"),
    CompanyName: Yup.string().required("Enter Company Name"),
    SelectCity: Yup.string().required("Please Select City"),
    postcode: Yup.string().required("Address is required"),
    privacyPolicy: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});
