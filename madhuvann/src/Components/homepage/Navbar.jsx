import logo from "../Assets/logo_maduvan.svg";
import ham from "../Assets/hamburger.png";
import donate from "../Assets/donation (1).png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Flex_bar">
      <div>
        <Link to="/about"><img src={ham} height="20px" /></Link>
      </div>
      <Link to="/">
        <div>
          <img className="logo" src={logo}></img>
        </div>
      </Link>
      <div className="button">
        <Link to="/Donate">
          <button>
            <img className="donate_icon" src={donate} />
            <div className="button_label"> Donate</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
