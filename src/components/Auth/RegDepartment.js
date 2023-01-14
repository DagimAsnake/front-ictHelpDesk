import { useState } from "react";

const RegDepartment = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [alertResponse, setAlertResponse] = useState(false);
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const signupRequest = async () => {
      const response = await fetch(
        "http://localhost:8080/user/department/post",
        {
          method: "POST",
          body: JSON.stringify({
            title: name,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      setAlertResponse(true);
      setMsg(data.msg);
      console.log(data);
    };

    signupRequest();
  };

  return (
    <section className="">
      <div className="mt-5 pt-5 offset-2">
        <div className="container d-flex justify-content-center align-items-center my-5">
          <div className="row">
            <div className="col-md-9 offset-md-3 col-xl-10 offset-xl-1 ">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Register</h5>
                  <form onSubmit={submitHandler}>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="email" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="">
                      <button className="btn btn-outline-success mb-3">
                        {" "}
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
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
    </section>
  );
};

export default RegDepartment;
