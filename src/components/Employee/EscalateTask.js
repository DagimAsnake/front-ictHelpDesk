import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import EmpAuthContext from "../Store/Emp-authContext";

function EscalateTask() {
  const empAuthCtx = useContext(EmpAuthContext);

  const { id } = useParams();

  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    const singleFetch = async () => {
      const response = await fetch(
        `http://localhost:8080/employee/escalate/` + id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + empAuthCtx.token,
          },
        }
      );
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      setRequestData(data.msg);
    };

    singleFetch();
  }, [id, empAuthCtx]);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h2>{requestData}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EscalateTask;
