import { Link } from "react-router-dom";
import "./styles/pixel-stars.css";

export default function Home() {
  return (
    <div className="page home_page">
      <header style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div className="header_inner">
          <div className="pixel_stars">
            <div className="stars_1"></div>
            <div className="stars_2"></div>
          </div>

          <div className="container">
            <div className="logo">
              <img src={require("../assets/images/logo.png")} alt="RUET" />
            </div>
  
            <h1>WELCOME TO RUET ECE</h1>
  
            <Link to={"/seniors"} className="primary_btn big round">Know Your Seniors</Link>
          </div>
        </div>
        
        <p className="copyright">Made with ❤ by <a href="https://facebook.com/forhadhossain.me" target="__blank">Forhad</a></p>
      </header>
    </div>
  )
}
