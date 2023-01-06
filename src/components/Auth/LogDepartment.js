import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DepAuthContext from "../Store/Dep-authContext";

const LogDepartment = () => {
  const depAuthCtx = useContext(DepAuthContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const loginRequest = async () => {
      const response = await fetch(
        "http://localhost:8080/auth/department/login",
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
      console.log(data);

      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);

      depAuthCtx.login(data.token, expiryDate.toISOString());

      if (data.msg === "Logged In Successfully") {
        navigate("/ict/request");
      }
    };

    loginRequest();
  };

  return (
    <section className="">
      <div className="container d-flex justify-content-center align-items-center my-5">
        <div className="row">
          <div className="col-md-9 offset-md-3 col-xl-10 offset-xl-1 ">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Log in</h5>
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
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogDepartment;
