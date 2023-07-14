import React from "react";
import "./MessageForm.css";
import CustomInput from "../CustomInput";

const MessageForm = () => {
  return (
    <div class="container col-xl-12 my-5">
      <div>
        <form className="container p-4 bg-light">
          <div className="row">
            <div class="col">
              <CustomInput
                type="email"
                label="Email"
                name="email"
                //   i_class="py-1"
                style={{ width: "100%" }}
              />
            </div>
            <div class="col">
              <CustomInput
                type="email"
                label="Email"
                name="email"
                //   i_class="py-1"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="row">
            <div class="col ">
              <CustomInput
                type="email"
                label="Email"
                name="email"
                //   i_class="py-1"
                style={{ width: "100%" }}
              />
            </div>
            <div class="col">
              <CustomInput
                type="email"
                label="Email"
                name="email"
                //   i_class="py-1"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          {/* <div className="row mb-4"> */}
          <div class="form-floating my-4 ">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          {/* </div> */}
          <div className="col pl-4">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
