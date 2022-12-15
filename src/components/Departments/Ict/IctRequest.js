import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function IctRequest() {
  const [requestData, setRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("https://ict-help-desk.onrender.com/task");
      const data = await response.json();
      setRequestData(data.msg);
      setIsLoading(false);
    };
    datafetch();
  }, []);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h2>Incoming Requests</h2>
            <hr className="success"></hr>

            {isLoading && <h3>Loading.....</h3>}

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
                              to=""
                              role="button"
                              className="btn btn-success btn-sm rounded-pill py-0"
                              data-bs-toggle="modal"
                              data-bs-target="#ictDetails"
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
                            to=""
                            role="button"
                            className="btn btn-outline-success ms-5"
                            data-bs-toggle="modal"
                            data-bs-target="#ictAssign"
                          >
                            {" "}
                            Assign To{" "}
                          </Link>
                          <Link
                            to=""
                            role="button"
                            className="btn btn-outline-success ms-5"
                            data-bs-toggle="modal"
                            data-bs-target="#ictDecline"
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
