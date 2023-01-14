import React, { useEffect, useState, useContext } from "react";
import Kena from "../../assets/kena.jpg";
import "./Star.css";
import "./Profile.css";
import EmpAuthContext from "../Store/Emp-authContext";

function Profile() {
  const empAuthCtx = useContext(EmpAuthContext);

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("http://localhost:8080/employee/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + empAuthCtx.token,
        },
      });
      const data = await response.json();
      setProfile(data.msg);
    };
    datafetch();
  }, [empAuthCtx]);

  return (
    <div className="mt-5 pt-5 offset-2">
      <div className="container">
        <div className="row mt-5 g-0">
          <div className="col-5 mt-5 ms-2">
            <div className="text-center">
              <div className="card-body">
                <div className="row">
                  <div className="col-7 offset-1 pt-5">
                    <h1>Welcome to employee panel!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 mt-5 ">
            <div className="row shadows bg-light p-4 rounded-5">
              <div className="col-3 offset-2">
                <img
                  src={Kena}
                  width={100}
                  height={100}
                  className="rounded-circle"
                  alt="profile"
                />
              </div>
              <div className="col-6">
                <h2>
                  {profile.firstName} {profile.lastName}
                </h2>
                <p className="ps-4">Senior It Technician</p>
                <p className="starability-result" data-rating={0}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
