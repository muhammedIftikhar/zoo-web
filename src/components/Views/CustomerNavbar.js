import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomerNavbar.css";

export default function CustomerNavbar() {
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
          Tickets
          {isHovered && (
            <div className="sub-menu">
              <CustomLink to="/ticket-view">View Tickets</CustomLink>
              <CustomLink to="/ticket-buy">Buy Tickets</CustomLink>
            </div>
          )}
        </CustomLink>
        <CustomLink to="/donation">Donate</CustomLink>
        <CustomLink to="/about-us">About us</CustomLink>
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
