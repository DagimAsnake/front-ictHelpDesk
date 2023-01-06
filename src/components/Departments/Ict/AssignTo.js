import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Kena from "../../../assets/kena.jpg";
import DepAuthContext from "../../Store/Dep-authContext";
import { useParams } from "react-router-dom";

function AssignTo() {
  const { taskid } = useParams();

  const depAuthCtx = useContext(DepAuthContext);

  const [requestEmployee, setRequestEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      //   const ta = await fetch(`http://localhost:8080/task/view/` + id, {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: "Bearer " + depAuthCtx.token,
      //     },
      //   });
      //   const taData = await ta.json();
      //   console.log(taData);
      const response = await fetch("http://localhost:8080/user");
      const data = await response.json();
      console.log(data);
      setRequestEmployee(data.msg);
      setIsLoading(false);
      console.log(taskid);
    };
    fetchEmployee();
  }, [depAuthCtx, taskid]);

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
              <h3 className="mt-5">There are no Employees.</h3>
            )}
            {!isLoading &&
              requestEmployee.map((Employee) => {
                console.log(Employee._id);
                return (
                  <div className="row" key={Employee.id}>
                    <div className="col-1 ms-5">
                      <img src={Kena} alt="profile" className="circles" />
                    </div>
                    <div className="col">
                      <p>
                        <b className="fw-bolder">
                          {Employee.firstName} {Employee.lastName}
                        </b>
                        {/* <p>{Employee.position}</p> */}
                      </p>
                    </div>
                    <div className="col ms-3">
                      <p>
                        <b className="fw-bolder text-center">Rating</b>
                        <p
                          className="starability-result ms-5"
                          //   data-rating={Employee.rating}
                          data-rating={3}
                        ></p>
                      </p>
                    </div>
                    <div className="col ms-3">
                      <Link
                        to={`/ict/assign/${taskid}/${Employee._id}`}
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

export default AssignTo;
