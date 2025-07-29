// import React from 'react';
// import { 
//   Users, ClipboardList, Calendar, Activity, 
//   FileText, User, LogOut, Stethoscope,
//   ClipboardCheck, Pill, BookOpen, Settings,
//   BarChart2, Megaphone, Building, Shield
// } from 'lucide-react';
// import './sidebar.css'

// const Sidebar = ({ userRole }) => {
//   // Define sidebar items based on user role
//   const sidebarItems = {
//     doctor: [
//       { name: "My Patients", icon: <Users size={18} /> },
//       { name: "Attendance", icon: <ClipboardCheck size={18} /> },
//       { name: "Schedule", icon: <Calendar size={18} /> },
//       { name: "Lab Records", icon: <Activity size={18} /> },
//       { name: "Prescriptions", icon: <Pill size={18} /> },
//       { divider: true },
//       { name: "View Profile", icon: <User size={18} /> },
//       { name: "Log Out", icon: <LogOut size={18} /> }
//     ],
//     patient: [
//       { name: "My Records", icon: <FileText size={18} /> },
//       { name: "My Doctors", icon: <Stethoscope size={18} /> },
//       { name: "Prescriptions", icon: <Pill size={18} /> },
//       { name: "Bookings", icon: <BookOpen size={18} /> },
//       { divider: true },
//       { name: "View Profile", icon: <User size={18} /> },
//       { name: "Log Out", icon: <LogOut size={18} /> }
//     ],
//     admin: [
//       { name: "Manage Facilities", icon: <Building size={18} /> },
//       { name: "Reports & Audits", icon: <ClipboardList size={18} /> },
//       { name: "Data & Analytics", icon: <BarChart2 size={18} /> },
//       { name: "Health Campaigns", icon: <Megaphone size={18} /> },
//       { name: "System Settings", icon: <Settings size={18} /> },
//       { divider: true },
//       { name: "View Profile", icon: <User size={18} /> },
//       { name: "Log Out", icon: <LogOut size={18} /> }
//     ]
//   };

//   // Get role-specific color scheme
//   const getRoleColors = () => {
//     switch(userRole) {
//       case 'doctor':
//         return {
//           bg: 'bg-[#FFF9E5]',
//           text: 'text-[#004030]',
//           hover: 'hover:bg-[#004030]/10',
//           active: 'bg-[#004030]/20',
//           border: 'border-[#004030]'
//         };
//       case 'patient':
//         return {
//           bg: 'bg-[#E5F9FF]',
//           text: 'text-[#006080]',
//           hover: 'hover:bg-[#006080]/10',
//           active: 'bg-[#006080]/20',
//           border: 'border-[#006080]'
//         };
//       case 'admin':
//         return {
//           bg: 'bg-[#E5ECFF]',
//           text: 'text-[#003366]',
//           hover: 'hover:bg-[#003366]/10',
//           active: 'bg-[#003366]/20',
//           border: 'border-[#003366]'
//         };
//       default:
//         return {
//           bg: 'bg-[#FFF9E5]',
//           text: 'text-[#004030]',
//           hover: 'hover:bg-[#004030]/10',
//           active: 'bg-[#004030]/20',
//           border: 'border-[#004030]'
//         };
//     }
//   };

//   const colors = getRoleColors();

//   // Get role-specific logo
//   const getRoleLogo = () => {
//     switch(userRole) {
//       case 'doctor':
//         return <Stethoscope size={24} className={colors.text} />;
//       case 'patient':
//         return <User size={24} className={colors.text} />;
//       case 'admin':
//         return <Shield size={24} className={colors.text} />;
//       default:
//         return <User size={24} className={colors.text} />;
//     }
//   };

//   return (
//     <div className={`${colors.bg} h-screen w-64 flex flex-col border-r ${colors.border} shadow-lg`}>
//       {/* Logo/Header */}
//       <div className={`p-4 border-b ${colors.border} flex items-center gap-3`}>
//         {getRoleLogo()}
//         <h2 className={`text-xl font-bold ${colors.text}`}>
//           {userRole === 'doctor' && 'Doctor Portal'}
//           {userRole === 'patient' && 'Patient Portal'}
//           {userRole === 'admin' && 'Admin Portal'}
//         </h2>
//       </div>

//       {/* Navigation Items */}
//       <div className="flex-1 overflow-y-auto p-4">
//         <nav className="space-y-1">
//           {sidebarItems[userRole]?.map((item, index) => (
//             item.divider ? (
//               <div key={`divider-${index}`} className={`border-t ${colors.border} my-2`}></div>
//             ) : (
//               <a
//                 key={item.name}
//                 href="#"
//                 className={`flex items-center gap-3 p-3 rounded-lg ${colors.hover} ${colors.text} transition-colors`}
//               >
//                 <span className={colors.text}>{item.icon}</span>
//                 <span className="font-medium">{item.name}</span>
//               </a>
//             )
//           ))}
//         </nav>
//       </div>

//       {/* User Profile Footer */}
//       <div className={`p-4 border-t ${colors.border} flex items-center gap-3`}>
//         <div className={`w-8 h-8 rounded-full ${colors.active} flex items-center justify-center`}>
//           <User size={16} className={colors.text} />
//         </div>
//         <div>
//           <p className={`text-sm font-medium ${colors.text}`}>
//             {userRole === 'doctor' && 'Dr. Smith'}
//             {userRole === 'patient' && 'John Doe'}
//             {userRole === 'admin' && 'Admin User'}
//           </p>
//           <p className={`text-xs ${colors.text}/70`}>
//             {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Usage example:
// // <Sidebar userRole="doctor" /> 
// // <Sidebar userRole="patient" />
// // <Sidebar userRole="admin" />

// export default Sidebar;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { 
  Users, ClipboardList, Calendar, Activity, 
  FileText, User, LogOut, Stethoscope,
  ClipboardCheck, Pill, BookOpen, Settings,
  BarChart2, Megaphone, Building, Shield
} from 'lucide-react';
import './sidebar.css';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ userRole, show, onHide }) => {
  // Define sidebar items based on user role
  const navigate = useNavigate();

  userRole = localStorage.userType

  const handleLogout = () => {
    // Remove token from local storage and update state
    const username = localStorage.getItem('username');
  
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('userType');

  
    // Prepare notification data
    const notificationData = {
      description: `${username} has logged out.`,
      date: new Date().toISOString(),
      read: false,
      username: username,
    };
  
    // Send notification to backend
    // axios
    //   .post('https://spaceshare-backend.onrender.com/set-notification', notificationData)
    //   .then(() => {
    //     console.log('Logout notification sent successfully');
    //   })
    //   .catch((error) => {
    //     console.error('Error sending logout notification:', error);
    //   });
  
    navigate('/auth'); // Redirect to home after logout
    // toggleSidebar(); // Close the sidebar after logout
  };

  const handleNavClick = (href) => {
    // Handle navigation logic here
    console.log('Navigate to:', href);
    // navigate(href);
    // Close sidebar on mobile after navigation
    if (onHide && window.innerWidth < 992) {
      onHide();
    }
  };

  const sidebarItems = {
    doctor: [
      { name: "My Patients", icon: <Users size={18} />, href: "/#/patient-list" , onClick: handleNavClick },
      { name: "Attendance", icon: <ClipboardCheck size={18} />, href: "#attendance" },
      { name: "Schedule", icon: <Calendar size={18} />, href: "/#/schedule" , onClick: handleNavClick},
      { name: "Lab Records", icon: <Activity size={18} />, href: "/#/lab-results" , onClick: handleNavClick},
      { name: "Prescriptions", icon: <Pill size={18} />, href: "/#/prescriptions" , onClick: handleNavClick },
      { divider: true },
      { name: "View Profile", icon: <User size={18} />, href: "/#/doctor" , onClick: handleNavClick},
      { name: "Log Out", icon: <LogOut size={18} />, onClick: handleLogout ,  }
    ],
    patient: [
      { name: "My Records", icon: <FileText size={18} />, href: "/#/patient-records" , onClick: handleNavClick },
      { name: "My Doctors", icon: <Stethoscope size={18} />, href: "#doctors" },
      { name: "Prescriptions", icon: <Pill size={18} />, href: "#prescriptions" },
      { name: "Bookings", icon: <BookOpen size={18} />, href: "#bookings" },
      { divider: true },
      { name: "View Profile", icon: <User size={18} />, href: "/#/patient" , onClick: handleNavClick },
      { name: "Log Out", icon: <LogOut size={18} />, onClick: handleLogout }
    ],
    admin: [
      { name: "Manage Facilities", icon: <Building size={18} />, href: "/#/facilitiesmanagement" , onClick: handleNavClick},
      { name: "Reports & Audits", icon: <ClipboardList size={18} />, href: "/#/audit-reports" , onClick: handleNavClick},
      { name: "HR Management", icon: <BarChart2 size={18} />, href: "/#/hrmanagement" },
      { name: "Pandemic Management", icon: <Megaphone size={18} />, href: "/#/pandemicmanagement" , onClick: handleNavClick},
      { name: "System Settings", icon: <Settings size={18} />, href: "#settings" },
      { divider: true },
      { name: "View Profile", icon: <User size={18} />, href: "#profile" },
      { name: "Log Out", icon: <LogOut size={18} />, onClick: handleLogout }
    ]
  };

  // Get role-specific logo
  const getRoleLogo = () => {
    switch(userRole) {
      case 'doctor':
        return <Stethoscope size={24} />;
      case 'patient':
        return <User size={24} />;
      case 'admin':
        return <Shield size={24} />;
      default:
        return <User size={24} />;
    }
  };

  // Get portal title based on role
  const getPortalTitle = () => {
    switch(userRole) {
      case 'doctor':
        return 'Doctor Portal';
      case 'patient':
        return 'Patient Portal';
      case 'admin':
        return 'Admin Portal';
      default:
        return 'Portal';
    }
  };

  // Get user name based on role
  const getUserName = () => {
    switch(userRole) {
      case 'doctor':
        return 'Dr. Smith';
      case 'patient':
        return 'John Doe';
      case 'admin':
        return 'Admin User';
      default:
        return 'User';
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {show && <div className="sidebar-backdrop show" onClick={onHide}></div>}
      
      {/* Sidebar */}
      <div className={`sidebar ${userRole || 'doctor'} ${show ? 'show' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          {getRoleLogo()}
          <h2 className="sidebar-brand">
            {getPortalTitle()}
          </h2>
        </div>

        {/* Navigation */}
        <Nav className="flex-column">
          {sidebarItems[userRole]?.map((item, index) => (
            item.divider ? (
              <div key={`divider-${index}`} className="sidebar-divider"></div>
            ) : (
              <Nav.Item key={item.name}>
                <Nav.Link 
                  href={item.href}
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   handleNavClick(item.href);
                  // }}
                  onClick={item.onClick}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Nav.Link>
              </Nav.Item>
            )
          ))}
        </Nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="user-avatar">
            <User size={16} />
          </div>
          <div className="user-info">
            <p className="user-name">
              {getUserName()}
            </p>
            <p className="user-role">
              {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;