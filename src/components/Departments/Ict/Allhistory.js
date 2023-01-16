import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import DepAuthContext from "../../Store/Dep-authContext";

function Allhistory() {
  const depAuthCtx = useContext(DepAuthContext);

  const [requestData, setRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("http://localhost:8080/task/allhistory", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + depAuthCtx.token,
        },
      });
      const data = await response.json();
      setRequestData(data.msg);
      setIsLoading(false);
      console.log(data);
    };
    datafetch();
  }, [depAuthCtx]);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            <h2>All History</h2>
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
                            {request.companyName}
                          </p>
                        </div>
                        <div className="col-3">
                          <p className="nav-link text-white text-end">
                            {request.isAssigned}
                          </p>
                        </div>
                        <div className="col">
                          <p className="nav-link  text-white">
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

export default Allhistory;
