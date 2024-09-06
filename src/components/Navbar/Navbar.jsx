import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import large from "../../photo/large.png";
import { TiThMenuOutline } from "react-icons/ti"; // Import your logo image
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={large} alt="Site Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="./">
            <li>Home</li>
          </Link>

          <Link to="./About">
            <li>About</li>
          </Link>
          <Link to="./Products">
            <li>Products</li>
          </Link>
          <Link to="./Contact">
            <li>Contact</li>
          </Link>
          <Link to="./Login">
            <li>Login</li>
          </Link>
          <Link to="./Cart">
            <li>
              <FaShoppingCart />
            </li>
          </Link>
        </ul>
        <div className="menu">
          <TiThMenuOutline onClick={() => setOpen(true)} />
        </div>
      </div>
      {open && (
        <div className="sidemenu">
          <ul>
            <IoClose className="close" onClick={() => setOpen(false)} />

            <Link to="/" onClick={()=> setOpen(false)}>
              <li>Home</li>
            </Link>

            <Link to="/About" onClick={()=> setOpen(false)}>
              <li>About</li>
            </Link>
            <Link to="/Products" onClick={()=> setOpen(false)}>
              <li>Products</li>
            </Link>
            <Link to="/Contact" onClick={()=> setOpen(false)}>
              <li>Contact</li>
            </Link>
            <Link to="/login" onClick={()=> setOpen(false)}>
              <li>Login</li>
            </Link>
            <Link to="/Cart" onClick={()=> setOpen(false)}>
              <li >
                <FaShoppingCart />
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
