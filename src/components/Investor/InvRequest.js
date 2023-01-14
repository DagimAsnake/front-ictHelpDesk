import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InvAuthContext from "../Store/Inv-authContext";

function InvRequest() {
  const invAuthCtx = useContext(InvAuthContext);

  const navigate = useNavigate();

  const [invName, setInvName] = useState("");
  const [workLoc, setWorkLoc] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  // const [ict, setIct] = useState("Internet Service");
  // const [facility, setFacility] = useState("General Maintenance");
  // const [investor, setInvestor] = useState("Make Promotion");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [alertResponse, setAlertResponse] = useState(false);
  const [msg, setMsg] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const addrequest = async () => {
      const response = await fetch("http://localhost:8080/task/post", {
        method: "POST",
        body: JSON.stringify({
          companyName: invName,
          description: desc,
          priority: priority,
          taskType: category,
          location: workLoc,
          contact_person_phone: phone,
          contact_person_name: name,
          requested_date: date,
          department: category,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + invAuthCtx.token,
        },
      });

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      setMsg(data.msg);
      setAlertResponse(true);

      if (data.msg === "Task submitted Successfully") {
        navigate("/investor/myrequest");
      }
    };

    addrequest();

    // ictService: ict,
    // facilityService: facility,
    // investorService: investor,
  };

  return (
    <div className="mt-5 pt-5 offset-2">
      <div className="container">
        <div className="row mt-3">
          <main className="col-8 text-center offset-2">
            <h1>
              Information Communication Technology Park Service Request form
            </h1>
          </main>
        </div>

        <div className="my-4">
          <form onSubmit={formSubmitHandler}>
            <div className="row">
              <div className="col-12">
                <h4>Requester Information</h4>
                <div className="mb-3">
                  <label htmlFor="invName" className="form-label">
                    Name of Requesting Company (Tenant or Investor)
                  </label>
                  <input
                    type="text"
                    id="invName"
                    name="invName"
                    className="form-control"
                    placeholder="Name"
                    value={invName}
                    onChange={(e) => {
                      setInvName(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="workLoc" className="form-label">
                    Work Location
                  </label>
                  <input
                    type="text"
                    id="workLoc"
                    name="workLoc"
                    className="form-control"
                    placeholder="work location"
                    value={workLoc}
                    onChange={(e) => {
                      setWorkLoc(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <h5>Contact Person</h5>
                  <div className="col-md">
                    <div className="form-row mb-3">
                      <label htmlFor="name"> Name </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md">
                    <div className=" form-row mb-3">
                      <label htmlFor="phone"> Phone number </label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <h5>Department Service Category</h5>
                <div className="row mb-3">
                  <div className="col-md form-check form-check-inline">
                    <input
                      name="category"
                      type="radio"
                      className="form-check-input"
                      id="ict"
                      value="ict"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
                    <label htmlFor="ict" className="form-check-label">
                      {" "}
                      Ict{" "}
                    </label>
                    {/* <select
                      className="form-select mt-2"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setIct(e.target.value);
                      }}
                    >
                      <option value="Internet Service" selected>
                        Internet Service
                      </option>
                      <option value="VOI (Voice Over Internet)">
                        VOI (Voice Over Internet)
                      </option>
                      <option value="Web Hosting">Web Hosting</option>
                      <option value="Video Conference">Video Conference</option>
                      <option value="Enterprise Email System">
                        Enterprise Email System
                      </option>
                      <option value="Collocation">Collocation</option>
                      <option value="ICT Support">ICT Support</option>
                    </select> */}
                  </div>
                  <div className="col-md form-check form-check-inline">
                    <input
                      name="category"
                      type="radio"
                      className="form-check-input"
                      id="facility"
                      value="facility"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
                    <label htmlFor="facility" className="form-check-label">
                      Facility
                    </label>
                    {/* <select
                      className="form-select mt-2"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setFacility(e.target.value);
                      }}
                    >
                      <option value="General Maintenance" selected>
                        General Maintenance
                      </option>
                      <option value="Sewer">Sewer</option>
                      <option value="Electricity">Electricity</option>
                      <option value="Water">Water</option>
                    </select> */}
                  </div>
                  <div className="col-md-5 form-check form-check-inline">
                    <input
                      name="category"
                      type="radio"
                      className="form-check-input"
                      id="investor"
                      value="investor"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
                    <label htmlFor="investor" className="form-check-label">
                      Investor Follow-up & Support
                    </label>
                    {/* <select
                      className="form-select mt-2"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setInvestor(e.target.value);
                      }}
                    >
                      <option value="Make Promotion" selected>
                        Make Promotion
                      </option>
                      <option value="Follow Up & Support Investor">
                        Follow Up & Support Investor
                      </option>
                      <option value="Collect Plan Report">
                        Collect Plan Report
                      </option>
                      <option value="Compel Plan & Report">
                        Compel Plan & Report
                      </option>
                      <option value="Organize Social Responsibilty Activities">
                        Organize Social Responsibilty Activities
                      </option>
                    </select> */}
                  </div>
                </div>
                <h5>Description of Requested Work</h5>
                <div className="my-3">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    rows={5}
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  >
                    {desc}
                  </textarea>
                </div>
                <h5>Requested Priority</h5>
                <div className="form-row mb-3">
                  <div className="col-md form-check form-check-inline">
                    <input
                      name="priority"
                      type="radio"
                      className="form-check-input"
                      id="high"
                      value="high"
                      onChange={(e) => setPriority(e.target.value)}
                    />
                    <label htmlFor="high" className="form-check-label">
                      {" "}
                      High{" "}
                    </label>
                  </div>
                  <div className="col-md form-check form-check-inline">
                    <input
                      name="priority"
                      type="radio"
                      className="form-check-input"
                      id="medium"
                      value="medium"
                      onChange={(e) => setPriority(e.target.value)}
                    />
                    <label htmlFor="medium" className="form-check-label">
                      Medium
                    </label>
                  </div>
                  <div className="col-md form-check form-check-inline">
                    <input
                      name="priority"
                      type="radio"
                      className="form-check-input"
                      id="low"
                      value="low"
                      onChange={(e) => setPriority(e.target.value)}
                    />
                    <label htmlFor="low" className="form-check-label">
                      Low
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md">
                    <div className="form-row mb-3">
                      <label htmlFor="date">
                        <b>Date of Request</b>{" "}
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="form-control"
                        placeholder=""
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md">
                    <div className=" form-row mb-3">
                      <label htmlFor="time">
                        <b>Time </b>
                      </label>
                      <input
                        type="time"
                        id="time"
                        className="form-control"
                        placeholder=""
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-success">Submit</button>
              </div>
            </div>
          </form>
          <div className="offset-3 col-4">
            {alertResponse && (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                {msg}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvRequest;
