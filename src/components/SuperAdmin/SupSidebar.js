import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ictLogo from "../../assets/ictLog2.png";
import "./Supsidebar.css";
import EmpAuthContext from "../Store/Emp-authContext";

function SupSidebar() {
  const empAuthCtx = useContext(EmpAuthContext);

  const logoutHandler = () => {
    empAuthCtx.logout();
  };

  return (
    <Sidebar>
      <div className="position-relative">
        <img
          src={ictLogo}
          alt="IctPark"
          width={80}
          className="my-4 ms-4 rounded-3"
        />
        <span className="text-white fw-bold position-absolute bottom-0 mb-4">
          ICT PARK
        </span>
      </div>

      <h4 className="ms-4 text-dark text-center">
        <span className="border-bottom border-3 border-light">
          Super Admin Panel
        </span>
      </h4>

      <NavLink
        to="/register/department"
        className={(navData) =>
          navData.isActive
            ? "active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
            : "text-white text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
        }
      >
        <span className="link-Hover">Add Department</span>
      </NavLink>

      <NavLink
        to="/register/investor"
        role="button"
        className={(navData) =>
          navData.isActive
            ? "active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
            : "text-white ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
        }
      >
        <span className="link-Hover">
          Add Investor <i className="bi bi-card-list"></i>
        </span>
      </NavLink>

      <NavLink
        to="/superadmin/tasks"
        role="button"
        className={(navData) =>
          navData.isActive
            ? "active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
            : "text-white ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
        }
      >
        <span className="link-Hover">
          Decline Tasks <i className="bi bi-card-list"></i>
        </span>
      </NavLink>

      <NavLink
        to="/superadmin/departments"
        role="button"
        className={(navData) =>
          navData.isActive
            ? "active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
            : "text-white ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
        }
      >
        <span className="link-Hover">
          Departments <i className="bi bi-card-list"></i>
        </span>
      </NavLink>

      <div className="mt-auto mb-5">
        <button
          onClick={logoutHandler}
          className={(navData) =>
            navData.isActive
              ? "active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
              : "text-white ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"
          }
        >
          <span className="link-Hover">
            Logout <i className="bi bi-box-arrow-right"></i>
          </span>
        </button>
      </div>
    </Sidebar>
  );
}

export default SupSidebar;
