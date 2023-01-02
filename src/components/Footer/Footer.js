import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="bg-dark d-flex align-items-center">
      <div className="container ">
        <div>
        <div className="row">
          <div className="col-md-6 mt-5 col-12">
            <img height={40} src={logo} alt="" />
          </div>
          <div className="col-md-6 mt-5 col-12">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>
                    <Link className="links" to="/">
                      About Online food
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/">
                      Read our blog
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/">
                      Sign up to deliver
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/">
                      Add your restaurant
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>
                    <Link className="links" to="/">
                      Get help
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/">
                      Read FAQs
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/">
                      View all cities
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/">
                      Restaurants near me
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 ">
            <p className="text-secondary">
              <small>Copyright &copy; {year} Code bears</small>
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-evenly">
            <Link className="links" to="/">
                    Privacy Policy.
                  </Link>
                  <Link className="links" to="/">
                    Terms of Use
                  </Link>
                  <Link className="links" to="/">
                    Pricing
                  </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
