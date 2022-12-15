import React from "react";
import { Route, Routes } from 'react-router-dom'
import EmpModal from "./components/Employee/Modal/EmpModal";
import IctModal from "./components/Departments/Ict/Modal/IctModal";
import EmpSidebar from "./components/Employee/EmpSidebar";
import EmpNavbar from "./components/Employee/EmpNavbar";
import Profile from "./components/Employee/Profile";
import Task from "./components/Employee/Task";
import Ictsidebar from "./components/Departments/Ict/IctSidebar";
import IctNavbar from "./components/Departments/Ict/IctNavbar";
import IctRequest from "./components/Departments/Ict/IctRequest";
import Escalated from './components/Departments/Ict/Escalated'
import Employee from "./components/Departments/Ict/Employee";
import Home from './components/Home/Home'
import InvSidebar from "./components/Investor/InvSidebar";
import InvNavbar from "./components/Investor/InvNavbar";
import InvRequest from "./components/Investor/InvRequest";
import InvReport from "./components/Investor/InvReport";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/profile" element={<> <EmpModal /> <EmpSidebar /> <EmpNavbar /> <Profile /> </>} />
        <Route path="/employee/task" element={<> <EmpModal /> <EmpSidebar /> <EmpNavbar /> <Task /> </>} />
        <Route path="/ict/request" element={<> <IctModal /> <Ictsidebar /> <IctNavbar /> <IctRequest /> </>} />
        <Route path="/ict/escalated" element={<> <IctModal /> <Ictsidebar /> <IctNavbar /> <Escalated /> </>} />
        <Route path="/ict/employee" element={<> <IctModal /> <Ictsidebar /> <IctNavbar /> <Employee /> </>} />
        <Route path='/investor/request' element={<> <InvSidebar /> <InvNavbar /> <InvRequest /> </>} />
        <Route path='/investor/report' element={<> <InvSidebar /> <InvNavbar /> <InvReport /> </>} />
      </Routes>
    </>
  );
}

export default App;
