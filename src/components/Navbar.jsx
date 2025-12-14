// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
// return(
//     <nav className="navbar">
//     <div className="links">
//     <Link to="/"><img src= "https://backgroundcut.co/media/output_images/7155db69-9fcf-4041-9221-b583eb10e2e6/output_image" alt="" className="logo" /></Link>
//     <Link to="/About" className="link">About us</Link>
//     <Link to="/Help" className="link">Help</Link>
// </div>
// </nav>
// )
// }
// export default Navbar;

import { Link } from "react-router-dom";
import "./Navbar.css";
import About from "../pages/About";

function Navbar() {
  return (
    <nav className="navbar">
      {}
      <Link to="/" className="logo">
        <img src="https://www.logoai.com/oss/icons/2021/10/27/rRWiZMXIlMsdf2Z.png" alt="Logo" />
      </Link>

      {}
      <div className="nav-links">
        <Link to="/about">About us</Link>
        <a href="#">Help</a>
      </div>
    </nav>
  );
}

export default Navbar;
