import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomerNavbar.css";

export default function ManagerNavbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Zoo
      </Link>
      <ul>
        <CustomLink
          to="/tickets"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Zoo Reports
          {isHovered && (
            <div className="sub-menu">
              <CustomLink to="/enclosure-report">Enclosure Reports</CustomLink>
              <CustomLink to="/animal-report">Animal Reports</CustomLink>
              <CustomLink to="/security-report">Security Reports</CustomLink>
            </div>
          )}
        </CustomLink>
        <CustomLink to="/business-report">Business Reports</CustomLink>
        <CustomLink to="/about-us">About us</CustomLink>
        <CustomLink to="/sign-in">Sign Out</CustomLink>
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
