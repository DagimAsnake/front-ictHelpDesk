import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import InvAuthContext from "../Store/Inv-authContext";

function DetailInvRequest() {
  const invAuthCtx = useContext(InvAuthContext);

  const { id } = useParams();

  const [requestData, setRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const singleFetch = async () => {
      const response = await fetch(`http://localhost:8080/task/view/` + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + invAuthCtx.token,
        },
      });
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      setRequestData(data.msg);
      setIsLoading(false);
    };

    singleFetch();
  }, [id, invAuthCtx]);

  console.log(requestData);

  return (
    <div className="pt-5 offset-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-9 offset-2 text-center mt-5">
            {isLoading && <h3>Loading....</h3>}
            <h2>Requested From- {requestData.companyName}</h2>
            <hr className="mb-5"></hr>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h4 className="">
                    Requested date-{" "}
                    <span className="fw-normal">
                      {requestData.requested_date}
                    </span>
                  </h4>
                </div>
                <div class="col">
                  <h4 className="">
                    Priority-{" "}
                    <span className="fw-normal">{requestData.priority}</span>
                  </h4>
                </div>
              </div>
              <div class="row mt-3">
                <h4 className="text-start"> Description</h4>
                <div class="col text-start">{requestData.description}</div>
              </div>
              <h2 className="mt-5">Requester infromation</h2>
              <hr className="success"></hr>
              <div class="row">
                <div class="col">
                  <h5>
                    Name-
                    {requestData.contact_person_name}
                  </h5>
                </div>
                <div class="col">
                  <h5>Phone-{requestData.contact_person_phone}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailInvRequest;
