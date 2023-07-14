import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InpuutContent from "../components/FormComponents/InputContent";

import { useFormik } from "formik";
import * as Yup from "yup";

import CustomInput from "../components/CustomInput.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

//
//
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Za-z]).{6,}$/,
      "Password must contain at least one special character, one number, and be at least 6 characters long"
    ),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  role: Yup.string().required("Role is required"),
});

const Login = () => {
  const userData = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const { password, email, role } = values;
      dispatch(loginUser({ password, email, role }));
      // Reset the form after successful login
      // resetForm();
    },
  });

  useEffect(() => {
    if (userData.password && userData.email) {
      if (userData.role === "super") {
        navigate("/admin");
      } else if (userData.role === "cell-L") {
        navigate("/admin/cell");
      } else if (userData.role === "liaison-O") {
        navigate("/admin/liaison");
      } else if (userData.role === "regional-L") {
        navigate("/admin/region");
      }
    }
  }, [userData]);

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
      </div>
      <InpuutContent>
        <form
          onSubmit={formik.handleSubmit}
          className="paddings innerWidth flexCenter v-container gap-5"
        >
          {/* left side */}
          <div className="v-left">
            <div
              style={{ minHeight: "500px" }}
              className="bg-color d-flex flex-column justify-content-center gap-2"
            >
              <h4 style={{ color: "orange" }}>Lorem ipsum</h4>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              </span>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              </span>
              <span>Lorem ipsum</span>
            </div>
          </div>
          {/* right */}
          <div className="flexColStart v-right">
            <span className="orangeText">Login</span>
            <span className="secondaryText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>

            <div style={{ width: "60%" }}>
              <CustomInput
                type="email"
                label="Email"
                name="email"
                val={formik.values.email}
                onChng={formik.handleChange}
                onBlr={formik.handleBlur}
                style={{ width: "100%" }}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger error-form">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="password"
                label="Password"
                name="password"
                val={formik.values.password}
                onChng={formik.handleChange}
                onBlr={formik.handleBlur}
                style={{ width: "100%" }}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger error-form">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Role, this is temporal for testing"
                name="role"
                val={formik.values.role}
                onChng={formik.handleChange}
                onBlr={formik.handleBlur}
                style={{ width: "100%" }}
              />
              {formik.touched.role && formik.errors.role && (
                <div className="text-danger  error-form">
                  {formik.errors.role}
                </div>
              )}
            </div>
            <div style={{ width: "60%", textAlign: "center" }} className="mt-3">
              {/* <span className="primaryText">Email</span> */}

              <button
                type="submit"
                style={{ width: "30%" }}
                className="flexCenter button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </InpuutContent>
      <Footer />
    </div>
  );
};

export default Login;
