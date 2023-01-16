import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import InvAuthContext from "../Store/Inv-authContext";

function RequestCompleted() {
  const invAuthCtx = useContext(InvAuthContext);

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch(
        "http://localhost:8080/task/completedtasks",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + invAuthCtx.token,
          },
        }
      );
      const data = await response.json();
      setTasks(data.msg);
      setIsLoading(false);
      console.log(data);
    };
    datafetch();
  }, [invAuthCtx]);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h2>Completed Requests</h2>
            <hr className="success"></hr>

            {isLoading && <h3>Loading.....</h3>}
            {!isLoading && tasks.length <= 0 && (
              <h3 className="mt-5 pt-5">
                You haven't made any request yet or your request is Pending.
              </h3>
            )}

            {!isLoading &&
              tasks.map((task) => {
                return (
                  <div className="row shadow bg-light my-5" key={task.id}>
                    <div className="col-12">
                      <div
                        className="row rounded mx-1"
                        style={{ backgroundColor: "rgb(4,170,109)" }}
                      >
                        <div className="col-7">
                          <p className="navbar-brand text-white text-start">
                            Task-1
                          </p>
                        </div>
                        <div className="col-3">
                          <p className="nav-link text-white text-end">
                            {" "}
                            04:30 am{" "}
                          </p>
                        </div>
                        <div className="col">
                          <p className="nav-link  text-white"> 07-04-2022 </p>
                        </div>
                      </div>
                      <div className="row g-0 mt-3">
                        <div className="col-4 text-start ms-4">
                          <p>
                            {" "}
                            <b>Company name-</b> {task.companyName}{" "}
                          </p>
                        </div>
                        <div className="col text-center">
                          <p>
                            {" "}
                            <b>Task priority-</b>{" "}
                            <button className="btn btn-warning btn-sm rounded-pill py-0">
                              {" "}
                              {task.priority}{" "}
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="row g-0">
                        <div className="col-4 text-start ms-4">
                          <p>
                            {" "}
                            <b>Task type-</b> {task.taskType}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="row g-0 mb-3">
                        <div className="col-4 offset-8">
                          <Link
                            to={`/investor/myrequest/${task._id}`}
                            role="button"
                            className="btn btn-outline-success ms-5"
                          >
                            {" "}
                            Details{" "}
                          </Link>
                          <Link
                            to={`/investor/${task._id}`}
                            role="button"
                            className="btn btn-outline-success ms-5"
                          >
                            {" "}
                            Completed{" "}
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

export default RequestCompleted;
