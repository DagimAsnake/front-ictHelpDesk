import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import DepAuthContext from "../../Store/Dep-authContext";

function IctRequest() {
  const depAuthCtx = useContext(DepAuthContext);

  const [requestData, setRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("http://localhost:8080/task", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + depAuthCtx.token,
        },
      });
      const data = await response.json();
      setRequestData(data.msg);
      setIsLoading(false);
    };
    datafetch();
  }, [depAuthCtx]);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h2>Incoming Requests</h2>
            <hr className="success"></hr>

            {isLoading && <h3>Loading.....</h3>}
            {!isLoading && requestData.length <= 0 && (
              <h3 className="mt-5 pt-5">There are no request for now.</h3>
            )}

            {!isLoading &&
              requestData.map((request) => {
                return (
                  <div className="row shadow bg-light my-5" key={request._id}>
                    <div className="col-12">
                      <div
                        className="row rounded mx-1"
                        style={{ backgroundColor: "rgb(4,170,109)" }}
                      >
                        <div className="col-7">
                          <p className="navbar-brand text-white text-start">
                            Request-1
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
                            {request.requested_date}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="row g-0 mt-3">
                        <div className="col-4 text-start ms-4">
                          <p>
                            {" "}
                            <b>Company name-</b> {request.companyName}{" "}
                          </p>
                        </div>
                        <div className="col text-center">
                          <p>
                            {" "}
                            <b>Task priority-</b>{" "}
                            <button className="btn btn-warning btn-sm rounded-pill py-0">
                              {" "}
                              {request.priority}{" "}
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="row g-0">
                        <div className="col-4 text-start ms-4">
                          <p>
                            {" "}
                            <b>Task type-</b> {request.taskType}{" "}
                            <Link
                              to={`/ict/request/${request._id}`}
                              role="button"
                              className="btn btn-success btn-sm rounded-pill py-0"
                            >
                              {" "}
                              Details
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="row g-0 mb-3">
                        <div className="col-4 offset-8">
                          <Link
                            to={`/ict/assign/${request._id}`}
                            role="button"
                            className="btn btn-outline-success ms-5"
                          >
                            {" "}
                            Assign To{" "}
                          </Link>
                          <Link
                            to={`/ict/${request._id}/decline`}
                            role="button"
                            className="btn btn-outline-success ms-5"
                          >
                            {" "}
                            Decline{" "}
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

export default IctRequest;
