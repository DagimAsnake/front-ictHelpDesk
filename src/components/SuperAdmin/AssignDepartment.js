import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import EmpAuthContext from "../Store/Emp-authContext";
import { useParams } from "react-router-dom";

function AssignDepartment() {
  const { taskId } = useParams();

  const empAuthCtx = useContext(EmpAuthContext);

  const [requestEmployee, setRequestEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch("http://localhost:8080/user/department", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + empAuthCtx.token,
        },
      });
      const data = await response.json();
      console.log(data);
      setRequestEmployee(data.msg);
      setIsLoading(false);
      console.log(taskId);
    };
    fetchEmployee();
  }, [empAuthCtx, taskId]);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h2 className="pb-5 mb-5">
              ICT Employees <hr />{" "}
            </h2>
            {isLoading && <h3>Loading......</h3>}
            {!isLoading && requestEmployee.length <= 0 && (
              <h3 className="mt-5">There are no Departments.</h3>
            )}
            {!isLoading &&
              requestEmployee?.map((Employee) => {
                console.log(Employee.id);
                return (
                  <div className="row" key={Employee.id}>
                    <div className="col">
                      <p>
                        <b className="fw-bolder">{Employee.title}</b>
                        {/* <p>{Employee.position}</p> */}
                      </p>
                    </div>
                    <div className="col ms-3">
                      <Link
                        to={`/superadmin/assign/${taskId}/${Employee.id}`}
                        role="button"
                        className="btn btn-outline-success"
                      >
                        Assign Task
                      </Link>
                    </div>
                    <hr />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignDepartment;
