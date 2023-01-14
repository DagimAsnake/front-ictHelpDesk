import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import EmpAuthContext from "../Store/Emp-authContext";

function DeclineTasks() {
  const empAuthCtx = useContext(EmpAuthContext);

  const [requestData, setRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const singleFetch = async () => {
      const response = await fetch(`http://localhost:8080/user/declinetasks`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + empAuthCtx.token,
        },
      });
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      setRequestData(data.msg);
      setIsLoading(false);
      console.log(data);
    };

    singleFetch();
  }, [empAuthCtx]);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h2>Declined Tasks</h2>
            <hr className="success"></hr>
            {isLoading && <h3>Loading.....</h3>}
            {!isLoading && requestData.length <= 0 && (
              <h3 className="mt-5 pt-5">There are no declined tasks</h3>
            )}
            {!isLoading &&
              requestData.map((escalated) => {
                return (
                  <div className="row shadow bg-light my-5" key={escalated.id}>
                    <div className="col-12">
                      <div
                        className="row rounded mx-1"
                        style={{ backgroundColor: "rgb(4,170,109)" }}
                      >
                        <div className="col-7">
                          <p className="navbar-brand text-white text-start">
                            Declined from- {escalated.department.title}
                          </p>
                        </div>
                        <div className="col-3">
                          <p className="nav-link text-white text-end">
                            {" "}
                            04:30 am{" "}
                          </p>
                        </div>
                        <div className="col">
                          <p className="nav-link  text-white">
                            {" "}
                            {escalated.requested_date}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="row g-0 mt-3">
                        <div className="col-4 text-start ms-4">
                          <p>
                            {" "}
                            <b>Company name-</b> {escalated.companyName}{" "}
                          </p>
                        </div>
                        <div className="col">
                          <p>
                            {" "}
                            <b>Task priority-</b>{" "}
                            <button className="btn btn-warning btn-sm rounded-pill py-0">
                              {" "}
                              {escalated.priority}{" "}
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="row g-0"></div>
                      <div className="row g-0 mb-3">
                        <div className="col-4 offset-8">
                          <Link
                            to={`/superadmin/assign/${escalated._id}`}
                            role="button"
                            className="btn btn-outline-success ms-5"
                          >
                            {" "}
                            Assign To
                          </Link>
                          <Link
                            to={`/superadmin/task/${escalated._id}`}
                            role="button"
                            className="btn btn-outline-success ms-5"
                          >
                            {" "}
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeclineTasks;
