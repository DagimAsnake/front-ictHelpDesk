import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import InvAuthContext from "./components/Store/Inv-authContext";
import DepAuthContext from "./components/Store/Dep-authContext";
import EmpAuthContext from "./components/Store/Emp-authContext";
import EmpModal from "./components/Employee/Modal/EmpModal";
import IctModal from "./components/Departments/Ict/Modal/IctModal";
import EmpSidebar from "./components/Employee/EmpSidebar";
import EmpNavbar from "./components/Employee/EmpNavbar";
import EmployeeDetails from "./components/Departments/Ict/EmployeeDetails";
import Allhistory from "./components/Departments/Ict/Allhistory";
import Profile from "./components/Employee/Profile";
import Task from "./components/Employee/Task";
import DetailTask from "./components/Employee/DetailTask";
import EscalateTask from "./components/Employee/EscalateTask";
import Ictsidebar from "./components/Departments/Ict/IctSidebar";
import IctNavbar from "./components/Departments/Ict/IctNavbar";
import IctRequest from "./components/Departments/Ict/IctRequest";
import Escalated from "./components/Departments/Ict/Escalated";
import DetailRequest from "./components/Departments/Ict/DetailRequest";
import AssignTo from "./components/Departments/Ict/AssignTo";
import Employee from "./components/Departments/Ict/Employee";
import DeclineTask from "./components/Departments/Ict/DeclineTask";
import Home from "./components/Home/Home";
import InvSidebar from "./components/Investor/InvSidebar";
import InvNavbar from "./components/Investor/InvNavbar";
import InvRequest from "./components/Investor/InvRequest";
import InvReport from "./components/Investor/InvReport";
import MyRequests from "./components/Investor/MyRequests";
import DetailInvRequest from "./components/Investor/DetailRequest";
import Completed from "./components/Investor/Completed";
import RequestCompleted from "./components/Investor/RequestCompleted";
import RegEmployee from "./components/Auth/RegEmployee";
import RegisterInvestor from "./components/Auth/RegisterInvestor";
import RegDepartment from "./components/Auth/RegDepartment";
import LogEmployee from "./components/Auth/LogEmployee";
import Loginvestor from "./components/Auth/LogInvestor";
import LogDepartment from "./components/Auth/LogDepartment";
import AsToResponse from "./components/Departments/Ict/AsToResponse";
import SupNavbar from "./components/SuperAdmin/SupNavbar";
import SupSidebar from "./components/SuperAdmin/SupSidebar";
import DeclineTasks from "./components/SuperAdmin/DeclineTasks";
import DetailsDecline from "./components/SuperAdmin/DetailsDecline";
import Departments from "./components/SuperAdmin/Departments";
import AssignDepartment from "./components/SuperAdmin/AssignDepartment";
import AsToDepartment from "./components/SuperAdmin/AsToDepartment";

function App() {
  const invAuthCtx = useContext(InvAuthContext);
  const depAuthCtx = useContext(DepAuthContext);
  const empAuthCtx = useContext(EmpAuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/employee/profile"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <EmpModal /> <EmpSidebar /> <EmpNavbar /> <Profile />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/loginEmployee"
          element={!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
        />
        <Route
          path="/employee/task"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <EmpModal /> <EmpSidebar /> <EmpNavbar /> <Task />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/employee/task/:id"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <EmpModal /> <EmpSidebar /> <EmpNavbar /> <DetailTask />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/employee/escalate/:id"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <EmpModal /> <EmpSidebar /> <EmpNavbar /> <EscalateTask />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/ict/request"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <IctRequest />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/loginDepartment"
          element={<>{!depAuthCtx.isDepLoggedIn && <LogDepartment />}</>}
        />
        <Route
          path="/ict/request/:id"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <DetailRequest />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/ict/assign/:taskid"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <AssignTo />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/ict/:id/decline"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <DeclineTask />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/ict/assign/:taskid/:userid"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <AsToResponse />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/ict/escalated"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <Escalated />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/ict/employee"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <Employee />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/ict/:empId"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <EmployeeDetails />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/ict/allhistory"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <Allhistory />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/investor/request"
          element={
            <>
              {invAuthCtx.isInvLoggedIn && (
                <>
                  <InvSidebar /> <InvNavbar /> <InvRequest />
                </>
              )}
              {!invAuthCtx.isInvLoggedIn && <Loginvestor />}
            </>
          }
        />
        <Route
          path="/loginInvestor"
          element={<>{!invAuthCtx.isInvLoggedIn && <Loginvestor />}</>}
        />
        <Route
          path="/investor/report"
          element={
            <>
              {invAuthCtx.isInvLoggedIn && (
                <>
                  <InvSidebar /> <InvNavbar /> <InvReport />
                </>
              )}
              {!invAuthCtx.isInvLoggedIn && <Loginvestor />}
            </>
          }
        />
        <Route
          path="/investor/myrequest"
          element={
            <>
              {invAuthCtx.isInvLoggedIn && (
                <>
                  <InvSidebar /> <InvNavbar /> <MyRequests />
                </>
              )}
              {!invAuthCtx.isInvLoggedIn && <Loginvestor />}
            </>
          }
        />
        <Route
          path="/investor/myrequest/:id"
          element={
            <>
              {invAuthCtx.isInvLoggedIn && (
                <>
                  <InvSidebar /> <InvNavbar /> <DetailInvRequest />
                </>
              )}
              {!invAuthCtx.isInvLoggedIn && <Loginvestor />}
            </>
          }
        />
        <Route
          path="/investor/:id"
          element={
            <>
              {invAuthCtx.isInvLoggedIn && (
                <>
                  <InvSidebar /> <InvNavbar /> <Completed />
                </>
              )}
              {!invAuthCtx.isInvLoggedIn && <Loginvestor />}
            </>
          }
        />
        <Route
          path="/investor/completedRequest"
          element={
            <>
              {invAuthCtx.isInvLoggedIn && (
                <>
                  <InvSidebar /> <InvNavbar /> <RequestCompleted />
                </>
              )}
              {!invAuthCtx.isInvLoggedIn && <Loginvestor />}
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && (
                <>
                  <IctModal /> <Ictsidebar /> <IctNavbar /> <RegEmployee />
                </>
              )}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        />
        <Route
          path="/register/investor"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <SupNavbar /> <SupSidebar />
                  <RegisterInvestor />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/register/department"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <SupNavbar /> <SupSidebar />
                  <RegDepartment />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/superadmin/tasks"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <SupNavbar /> <SupSidebar />
                  <DeclineTasks />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/superadmin/task/:id"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <SupNavbar /> <SupSidebar />
                  <DetailsDecline />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/superadmin/departments"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <SupNavbar /> <SupSidebar />
                  <Departments />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/superadmin/assign/:taskId"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <SupNavbar /> <SupSidebar />
                  <AssignDepartment />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
        <Route
          path="/superadmin/assign/:taskId/:depId"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && (
                <>
                  <SupNavbar /> <SupSidebar />
                  <AsToDepartment />
                </>
              )}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
