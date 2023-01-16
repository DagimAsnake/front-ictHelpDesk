import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DepAuthContext from "../../Store/Dep-authContext";

function EmployeeDetails() {
  const depAuthCtx = useContext(DepAuthContext);
  const { empId } = useParams();

  const [requestEmployee, setRequestEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch(`http://localhost:8080/employee/${empId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + depAuthCtx.token,
        },
      });
      const data = await response.json();
      console.log(data);
      setRequestEmployee(data.msg);
      setIsLoading(false);
    };
    fetchEmployee();
  }, [empId, depAuthCtx]);

  return (
    <div className="pt-5 offset-2">
      <div className="container m-5">
        <h1>Employee Details</h1>
        {isLoading && <h4>Loading.....</h4>}
        {!isLoading && (
          <div>
            <h5>
              Name- {requestEmployee.firstName} {requestEmployee.lastname}{" "}
            </h5>
            <h5>username- {requestEmployee.username} </h5>
            <h5>email- {requestEmployee.email}</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeDetails;
