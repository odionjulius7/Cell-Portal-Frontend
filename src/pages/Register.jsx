import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InpuutContent from "../components/FormComponents/InputContent";

import CustomInput from "../components/CustomInput.jsx";
import Stepper from "../components/Stepper/Stepper";

const Register = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
      </div>
      <InpuutContent>
        <div className="paddings innerWidth flexCenter v-container gap-5">
          {/* left side */}
          <div className="v-left">
            <div
              style={{ minHeight: "600px" }}
              className="bg-color d-flex flex-column justify-content-center gap-2"
            >
              <h4 style={{ color: "orange" }}>Register</h4>
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
          <div className="flexColStart v-right p-5 m-4">
            <Stepper />
          </div>
        </div>
      </InpuutContent>
      <Footer />
    </div>
  );
};

export default Register;
