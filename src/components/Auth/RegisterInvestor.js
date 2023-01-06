import React, { useState } from "react";

function RegisterInvestor() {
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const employeeRequest = async () => {
      const response = await fetch("http://localhost:8080/user/investor/post", {
        method: "POST",
        body: JSON.stringify({
          companyName: companyName,
          password: password,
          location: location,
          contact_person: name,
          contact_phone: phone,
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);
    };

    employeeRequest();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="row">
        <div className="col-md-9 offset-md-3 col-xl-10 offset-xl-1 ">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Register</h5>
              <form onSubmit={submitHandler}>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="companyname" className="form-label">
                      {" "}
                      Enter Company Name{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyname"
                      name="companyname"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      autoFocus
                      required
                    />
                  </div>

                  <div className="col">
                    <label htmlFor="name" className="form-label">
                      {" "}
                      Contact Person Name{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col">
                    <label htmlFor="phone" className="form-label">
                      {" "}
                      Phone{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="location" className="form-label">
                      {" "}
                      Location{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button className="btn btn-outline-success d-grid">
                  {" "}
                  Sign Up{" "}
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterInvestor;
