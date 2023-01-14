import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import InvAuthContext from "../Store/Inv-authContext";

function Completed() {
  const invAuthCtx = useContext(InvAuthContext);

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const AssignedTask = async () => {
      const response = await fetch(`http://localhost:8080/report/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + invAuthCtx.token,
        },
      });
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      console.log(data);
      setIsLoading(false);
    };

    AssignedTask();
  }, [id, invAuthCtx]);
  return (
    <>
      <div className="pt-5 offset-2">
        <div className="container mb-5">
          <div className="row">
            <div className="col-9 offset-2 text-center mt-5">
              <div>{isLoading && <h4>Loading...</h4>}</div>
              <div>{!isLoading && <h1>Completed</h1>}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Completed;
