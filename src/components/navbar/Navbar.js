import "./Navbar.css";
import Dropdown from "../navbar/Dropdown";
import { Link } from "react-router-dom";
import Login from "../main/login/Login";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="button">
        <i className="fa fa-user-link"></i>
        {/* <Link to="/login">Login</Link> */}
      {/* </div> */}
      <div className=""></div>
      <div className="navbar__right">
        <a href="#"></a>
        <div className="responsive">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
