import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome , FaTruck } from "react-icons/fa";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { IoIosInformationCircle, IoIosNotifications } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg"; 
import { FaNewspaper } from "react-icons/fa6";
import './sidebar.css';
import axios from 'axios';
import { IoChatbubbleEllipses } from "react-icons/io5";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShipperLoggedIn, setIsShipperLoggedIn] = useState(false);
  const [chatList , setChatList] = useState([]);
  const [filter, setFilter] = useState('all');


  const isLinkActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };



  const handleNavClick = (path) => {
    navigate(path);
    toggleSidebar(); // Close the sidebar when a navigation item is clicked
  };




  const homeRedirectPath = localStorage.getItem('companyName') ? '/shipper-dashboard' : '/';

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="flex-column d-none d-lg-block sidebar"
    >
      <Navbar.Brand as={Link} to="/">
        <img src="https://github.com/CongoBeast/SpaceShare/blob/main/public/Meli-removebg-preview.png?raw=true" 
        alt="Imat Tech Logo"
          style={{  width: "140px" , height: "80px" }}
          className="d-flex align-items-center"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />

      <Navbar.Collapse id="basic-navbar-nav" className={!isOpen && "d-none d-lg-block"}>
        <Nav className="flex-column gap-3" style={{ padding: "2rem", textAlign: "right" }}>
          <Button
            variant={isLinkActive("/home") ? "primary" : "outline-light"}
            className="text-left d-flex align-items-center"
            style={{ marginBottom: "1rem" }}
            onClick={() => handleNavClick(homeRedirectPath)}
          >
            <FaHome />
            <span style={{ marginLeft: "1rem" }}>Home</span>
          </Button>

        

          <Button
                variant={isLinkActive("/shippers") ? "primary" : "outline-light"}
                className="text-left d-flex align-items-center"
                style={{ marginBottom: "1rem" }}
                onClick={() => handleNavClick('/shippers')}
              >
                <FaTruck />
                <span style={{ marginLeft: "1rem" }}>Pro Shippers</span>
           </Button>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
