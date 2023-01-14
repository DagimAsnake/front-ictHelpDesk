import React, { useState, useContext } from "react";

import DepAuthContext from "../Store/Dep-authContext";

function Register() {
  const depAuthCtx = useContext(DepAuthContext);

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Employee");

  const [alertResponse, setAlertResponse] = useState(false);
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const employeeRequest = async () => {
      const response = await fetch("http://localhost:8080/user/post", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
          role: role,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + depAuthCtx.token,
        },
      });

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      setAlertResponse(true);
      setMsg(data.msg);
      console.log(data);
    };

    employeeRequest();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5 offset-3">
      <div className="row">
        <div className="col-md-9 offset-md-3 col-xl-10 offset-xl-1 ">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Register</h5>
              <form onSubmit={submitHandler}>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="firstname" className="form-label">
                      {" "}
                      Enter Firstname{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      autoFocus
                      required
                    />
                  </div>

                  <div className="col">
                    <label htmlFor="lastname" className="form-label">
                      {" "}
                      Enter Lastname{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col">
                    <label htmlFor="username" className="form-label">
                      {" "}
                      Enter Username{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="email" className="form-label">
                      {" "}
                      Enter Email{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col">
                    <label htmlFor="password" className="form-label">
                      {" "}
                      Enter Password{" "}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* <div className="row mb-3 ms-2">
                  <div className="col-3 form-check form-check-inline">
                    <input
                      name="role"
                      type="radio"
                      className="form-check-input"
                      id="Admin"
                      value="Admin"
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    />
                    <label htmlFor="Admin" className="form-check-label">
                      {" "}
                      Admin{" "}
                    </label>
                  </div>

                  <div className="col-3 form-check form-check-inline">
                    <input
                      name="role"
                      type="radio"
                      className="form-check-input"
                      id="Employee"
                      value="Employee"
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    />
                    <label htmlFor="Employee" className="form-check-label">
                      {" "}
                      Employee{" "}
                    </label>
                  </div>

                  <div className="col-3 form-check form-check-inline">
                    <input
                      name="role"
                      type="radio"
                      className="form-check-input"
                      id="investor"
                      value="Investor"
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    />
                    <label htmlFor="investor" className="form-check-label">
                      {" "}
                      Investor{" "}
                    </label>
                  </div>
                </div> */}
                <button className="btn btn-outline-success d-grid">
                  {" "}
                  Sign Up{" "}
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
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
  );
}

export default Register;
