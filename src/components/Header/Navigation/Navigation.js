import React from "react";
import logo from "../../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";

const Navigation = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const [user] = useAuthState(auth);
  const navigation = useNavigate();
  const handelSignOut=()=>{
    signOut();
    navigation('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
           <Link to='/'>
           <img className="" height={"40px"} src={logo} alt="brand_logo" />
           </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="">
            <button className="m-0 border-0 bg-white"><FontAwesomeIcon icon={ faCartShopping} />
            <label><sup className="text-danger fs-5 mx-1">0</sup></label></button>
            <span  className="cursor">
            {
              user ? <span onClick={handelSignOut} style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={ faRightFromBracket} />
                <label style={{cursor:'pointer'}} htmlFor="">Logout</label>
              </span> :
              <span>
                <button onClick={()=>navigation('/login')} className="btn bt-light rounded-pill px-4 mx-2 text-bold">
              Login
            </button>
            <button onClick={()=>navigation('/signup')} className="btn btn-danger rounded-pill px-4">
              Sign up
            </button>
              </span>
            }
            </span>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
