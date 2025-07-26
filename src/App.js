import logo from './logo.svg';
import './App.css';
import './index.css';
import {HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import SidebarNavbar from './components/sidebar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopNavBar from "./components/TopNavBar";
import AdminDashboard from "./pages/AdminDashboard.tsx";

import PatientProfile from "./pages/PatientDashboard";
import DoctorProfile from "./pages/DoctorProfile";
import HRManagement from "./pages/HRManagement.js";
import FacilitiesManagement from "./pages/FacilitiesManagement.js";
import ManageFacility from "./pages/ManageFacility.js";
import PandemicManagement from "./pages/PandemicManagement.js";





function App() {
  return (
    //     <Router>
    // <div className="d-flex">
    //   <SidebarNavbar />

    //   <div className="container-fluid">
    //   <TopNavBar />
    //     <Routes>
    //       <Route path="/" element={<AdminDashboard />} />
    //       <Route path="/patient" element={<PatientProfile/>}/>
    //     </Routes>
    //   </div>
    
    // </div>
    // </Router>
    <div>
    <Router>
      <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/patient" element={<PatientProfile/>}/>
      <Route path="/doctor" element={<DoctorProfile/>}/>
      <Route path="/hrmanagement" element={<HRManagement/>}/>
      <Route path="/facilitiesmanagement" element={<FacilitiesManagement/>}/>
      <Route path="/managefacility" element={<ManageFacility/>}/>
      <Route path="/pandemicmanagement" element={<PandemicManagement/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
