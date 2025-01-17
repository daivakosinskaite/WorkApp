import { Link } from "react-router-dom";
import Profile from "../user/profile/Profile";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Time logger</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/clients">Valdyti klientus</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Valdyti paslaugas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Pradinis</Link>
            </li>
            <Profile />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
