import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import CustomInput from "../CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

// Yup schema
let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  brand: yup.string().required("Brand is Required"),
  category: yup.string().required("Category is Required"),
  tags: yup.string().required("Tag is Required"),
  color: yup
    .array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),
  quantity: yup.number().required("Quantity is Required"),
});
// YUP
const Stepper = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "30px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    // marginTop: 16,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
    padding: 24,
    minHeight: "400px",
  };

  // Formik
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      //   dispatch(createProducts(values));
      console.log(values);
    },
  });

  return (
    <>
      <div style={contentStyle}>
        <Steps current={current} items={items} />

        {current === 0 && (
          <>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Full Name"
                name="fullName"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="User Name"
                name="userName"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="email"
                label="Email"
                name="email"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="password"
                label="Password"
                name="password"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="number"
                label="Phone Number"
                name="phoneNumber"
                style={{ width: "100%" }}
              />
            </div>
          </>
        )}
        {current === 1 && (
          <>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Cell Name"
                name="fullName"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Cell Region"
                name="userName"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Country"
                name="email"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Cell Leader"
                name="password"
                style={{ width: "100%" }}
              />
            </div>
          </>
        )}
        {current === 2 && (
          <>
            <div style={{ width: "60%" }}>
              <select
                name="brand"
                onChange={formik.handleChange("brand")}
                onBlur={formik.handleBlur("brand")}
                value={formik.values.brand}
                className="form-control py-3 mb-1 mt-3"
                id=""
                style={{ width: "100%" }}
              >
                <option value="" disabled>
                  Select Position...
                </option>

                <option value="member">Member</option>
                <option value="cell leader">Cell Lader</option>
                <option value="regional officer">Regional Officer</option>
              </select>
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Cell Region"
                name="userName"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Country"
                name="email"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <CustomInput
                type="text"
                label="Cell Leader"
                name="password"
                style={{ width: "100%" }}
              />
            </div>
          </>
        )}

        {/* <div style={contentStyle}>{steps[current].content}</div> */}
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Stepper;
