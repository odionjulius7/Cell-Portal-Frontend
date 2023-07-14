import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { motion } from "framer-motion";
import CustomInput from "../components/CustomInput";
import { Button } from "antd";

const CellMeetingReport = () => {
  const bounceVariants = {
    initial: { scale: 1 },
    bounce: { scale: 1.2 },
  };

  const bounceTransition = {
    duration: 0.3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };
  return (
    <div className="container">
      <div className="row gap-5">
        <div className="col-7 ">
          <h4>Fill The Report Fields</h4>
          <form style={{ minHeight: "500px" }} className="bg-white py-4 px-5">
            <CustomInput
              type="text"
              label="Cell Name"
              name="userName"
              style={{ width: "100%" }}
            />
            <CustomInput
              type="text"
              label="Zone"
              name="userName"
              style={{ width: "100%" }}
            />
            <CustomInput
              type="number"
              label="Attendees"
              name="userName"
              style={{ width: "100%" }}
            />
            <ReactQuill
              theme="snow"
              className="mt-3"
              name="description"
              style={{ height: "150px" }}
              //   onChange={formik.handleChange("description")}
              //   value={formik.values.description}
            />
            <div className="mt-5">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
        <motion.div
          className="col-3"
          style={{
            background:
              "linear-gradient(to right, rgba(124, 198, 186, 0.4), rgba(0, 0, 0, 0.57))",
          }}
          whileHover="bounce"
          whileTap="bounce"
          variants={bounceVariants}
          transition={bounceTransition}
        ></motion.div>
      </div>
    </div>
  );
};

export default CellMeetingReport;
