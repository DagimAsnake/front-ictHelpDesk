import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DepAuthContext from "../../Store/Dep-authContext";

function DeclineTask() {
  const depAuthCtx = useContext(DepAuthContext);

  const { id } = useParams();

  const [requestData, setRequestData] = useState("");
  const [reason, setReason] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const DeclineHandler = async () => {
      const response = await fetch(`http://localhost:8080/task/${id}/decline`, {
        method: "POST",
        body: JSON.stringify({
          reason: reason,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + depAuthCtx.token,
        },
      });
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      setRequestData(data.msg);
    };

    DeclineHandler();
  };

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h5 className="ms-5">Enter Reason For Declining</h5>
            <div className="row">
              <div className="col-12">
                <textarea
                  class="form-control"
                  cols="10"
                  rows="5"
                  placeholder="type here..."
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                >
                  {reason}
                </textarea>
              </div>
              <div className="col offset-5 mt-2">
                <button className="btn btn-success" onClick={submitHandler}>
                  Submit
                </button>
              </div>
            </div>
            {requestData}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeclineTask;
