import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomerNavbar.css";

export default function EmployeeNavbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Zoo
      </Link>
      <ul>
        <CustomLink
          to="/add-animal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Animals
          {isHovered && (
            <div className="sub-menu">
              <CustomLink to="/veterinarian-record">Veterinarian Records</CustomLink>
              <CustomLink to="/diet-entry">Diets</CustomLink>
            </div>
          )}
        </CustomLink>
        <CustomLink to="/clock-in">Clock In</CustomLink>
        <CustomLink to="/add-enclosure-form">Enclosure Entry</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/add-security-form">Security</CustomLink>
        <CustomLink to="/sign-in">Sign out</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, onMouseEnter, onMouseLeave, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
