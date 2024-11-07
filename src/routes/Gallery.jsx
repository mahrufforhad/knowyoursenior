import { Link } from "react-router-dom";
// styles
import "./styles/pixel-stars.css";
// icons
import { ArrowIcon } from "../assets/icons/Icons";

export default function Gallery() {
  return (
    <div className="page gallery_page">
      <header>
        <div className="header_inner">
          <div className="pixel_stars">
            <div className="stars_1"></div>
            <div className="stars_2"></div>
          </div>

          <div className="container">
            <div className="logo">
              <img src={require("../assets/images/logo.png")} alt="RUET" />
            </div>

            <div className="links_route">
              <Link to={"/"}>Home</Link>
              <ArrowIcon />
              Gallery
            </div>
  
            <h1>ECE GALLERY</h1>
            
          </div>
        </div>
      </header>
    </div>
  )
}
