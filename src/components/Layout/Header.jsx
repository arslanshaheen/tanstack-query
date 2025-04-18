import { Link, useLocation } from "react-router-dom";


export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="logo">My App</h1>
      <nav className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/trad" className={location.pathname === "/trad" ? "active" : ""}>
          FetchOld
        </Link>
        <Link to="/rq" className={location.pathname.startsWith("/rq") ? "active" : ""}>
          FetchRQ
        </Link>
        <Link to="/infinite" className={location.pathname === "/infinite" ? "active" : ""}>
          Infinite
        </Link>
      </nav>
    </header>
  );
};
