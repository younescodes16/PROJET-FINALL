import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css';
import large from '../../photo/large.png'; // Import your logo image

const Navbar = () => {
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
          <Link to="./Products">
            <li>Products</li>
          </Link>
          <Link to="./About">
            <li>About</li>
          </Link>
          <Link to="./Contact">
            <li>Contact</li>
          </Link>
          <Link to="./Cart">
            <li>
              <FaShoppingCart />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
