import React, { useEffect, useState, useContext } from "react";
import EmpAuthContext from "../Store/Emp-authContext";

function Departments() {
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
    };
    fetchEmployee();
  }, [empAuthCtx]);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h2 className="pb-5">
              Departments <hr />{" "}
            </h2>
            {isLoading && <h3>Loading......</h3>}
            {!isLoading && requestEmployee.length <= 0 && (
              <h3 className="mt-5">There are no Employees.</h3>
            )}
            {!isLoading &&
              requestEmployee.map((Employee) => {
                return (
                  <div className="row" key={Employee.id}>
                    <div className="col">
                      <p>
                        <b className="fw-bolder">{Employee.title}</b>
                      </p>
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

export default Departments;
