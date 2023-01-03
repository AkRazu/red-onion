import React, { useRef, useState } from "react";
import logo from "../../images/logo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const [signInWithGoogle, error1] = useSignInWithGoogle(auth);
  
  
  let errorElement;
  if (error || error1) {
    errorElement = error1 ? (
      <p className="text-danger">Error: {error1?.message}</p>
    ) : (
      <p className="text-danger">Error: {error?.message}</p>
    );
  }

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  console.log(location);
  
  const handelForgot = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);

      toast.success("Sent email");
    } else {
      toast.error("Enter you email address");
    }
  };
  const handelSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    if (!error) {
      signInWithEmailAndPassword(email, password);
      toast("✔️ Login Success !!");
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="bg-main">
        <div className="bg-light p-5 rounded shadow-sm">
          <div className="d-flex justify-content-center my-4">
            <img height={50} src={logo} alt="" />
          </div>
          <form onSubmit={handelSignUp} action="">
            <input
              className="form-control "
              type="email"
              name="email"
              ref={emailRef}
              id=""
              placeholder="Email"
              required
            />
            <input
              className="form-control "
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />

            <button className="w-100 btn btn-danger mt-3 btn-lg">Login</button>
          </form>
          <div className="d-flex justify-content-between">
            <Link to="/signup" className="an-account">
              Don't have an account ?
            </Link>
            <Link
              onClick={() => handelForgot()}
              className="text-danger d-block my-1"
            >
              Forgot Password
            </Link>
          </div>
          {errorElement}
          <div className="d-flex align-items-center">
            <div className="or-div"></div>
            <p className="mx-2 text-secondary">or</p>
            <div className=" or-div"></div>
          </div>
          <div
            onClick={() => signInWithGoogle()}
            style={{ cursor: "pointer" }}
            class="d-flex justify-content-center align-items-center  border rounded-lg w-full py-3"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span class="ms-2">Sign With Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
