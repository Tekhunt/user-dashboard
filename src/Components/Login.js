import React, { useState } from "react";
import styled from "styled-components";
import { MdPayments } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";

const LoginWrapper = styled.div`
  font-family: Poppins;
  // @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
  .container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 150px;
    // font-family: 'Poppins', sans-serif;
  }
  .error{
      font-size: 13px;
      margin-top: 10px;
      color: red;
  }

  .logo1 {
    font-size: 50px;
  }
  .wrapper {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
      url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9x8ZrVDC7EyN9qd-NdjrJVdVSBZI5q3yQg&usqp=CAU");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 2rem;
    margin-bottom: 3rem;
  }

  .wrapper > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: white;
  }

  .wrapper > div > img {
    width: 40px;
    height: 40px;
    color: white;
  }

  .wrapper > div > p {
    max-width: 70%;
    text-align: center;
  }

  .welcome-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .nav-bottom {
    transform: translateY(10rem);
    margin-left: -22rem;
  }
  .nav-bottom a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    margin-right: 10px;
  }

  h2 {
    font-weight: 300;
  }

  .login {
    font-size: 14px;
    max-width: 60%;
  }

  input[type="text"],
  input[type="password"] {
    width: 60%;
    padding: 12px 20px;
    border-radius: 5px;
    margin-top: 10px;
    outline: none;
    border: 1px solid #cecece;
    background-color: rgba(218, 219, 221, 0.3);
  }

  .Email-input {
    margin: 20px 0 20px 0;
  }

  .password-input > div {
    max-width: 60%;
    display: flex;
    justify-content: space-between;
  }
  .password-input a {
    text-decoration: none;
    font-size: 12px;
    color: rgb(133, 91, 173);
  }

  button {
    width: 60%;
    padding: 12px 0px;
    border-radius: 5px;
    margin-top: 5px;
    outline: none;
    border: none;
    color: white;
    background-color: rgb(98, 15, 175);
  }
  .dashboard-proceed {
    width: 100%;
    padding: 12px 0rem;
    border-radius: 5px;
    // margin-top: 20px;
    outline: none;
    border: none;
    color: white;
    background-color: rgb(98, 15, 175);
    color: white;
  }

  .check-box {
    max-width: 60%;
    margin: 20px 0;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .check-box span {
    font-size: 11px;
    font-weight: 300;
  }

  .join {
    margin-top: 6rem;
    font-size: 14px;
  }
  .join span {
    color: rgb(98, 15, 175);
  }

  @media only screen and (max-width: 767px) {
    .container {
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      gap: 50px;
      font-family: "Poppins", sans-serif;
    }

    .center-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .wrapper {
      margin-left: 0rem;
      margin-bottom: 0rem;
    }

    .wrapper {
      padding: 7rem 0;
    }
    .nav-bottom {
      display: none;
    }
    .welcome-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 12px 20px;
      border-radius: 5px;
      margin-top: 10px;
      outline: none;
      border: 1px solid #cecece;
      background-color: rgba(218, 219, 221, 0.3);
    }
    .password-input > div {
      max-width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .password-input a {
      text-decoration: none;
      font-size: 12px;
      color: rgb(133, 91, 173);
    }
    button {
      width: 100%;
      padding: 12px 0px;
      border-radius: 5px;
      margin-top: 5px;
      outline: none;
      border: none;
      color: white;
      background-color: rgb(98, 15, 175);
    }
    .dashboard-proceed {
      width: 100%;
      padding: 12px 0px;
      border-radius: 5px;
      margin-top: 5px;
      outline: none;
      // border: none;
      color: white;
      background-color: rgb(98, 15, 175);
    }
    .join {
      margin-left: 20px;
    }
  }
`;

function Login() {
  const [form, setForm] = useState({ emal: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { email, password } = form;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
      e.preventDefault()
      setError("")
    setLoading(true);
    const token = `hydrogenhr-hris-service:password`;
    const encodedToken = new Buffer.from(token).toString('base64');
      const basicAuth = 'Basic ' + encodedToken;

      const params = new URLSearchParams()
      params.append('grant_type', 'password')
      params.append('username', email)
      params.append('password', password)

    axios
      .post("https://api.staging.hydrogenhr.com/api/v1/oauth/token", 
        params,
        {
            headers: {
              'Content-Type':'application/x-www-form-urlencoded',     
              'Authorization': basicAuth
            },
      })

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        localStorage.setItem('user', JSON.stringify(res.data))
        window.location.pathname = "/dashboard"
        // navigate('/dashboard')
      })
      .catch((err) => {
        setLoading(false);
        setError("Please input correct credentials!")
        console.log(err)
      });
  };

  return (
    <LoginWrapper>
      <div className="container">
        <div className="wrapper">
          <div>
            <p className="logo1">
              <MdPayments />
            </p>
            {/* <img src="assets/instagram.png" alt="" /> */}
            <h3>Hydrogen Payroll</h3>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. qui
              dolores dolore non ex debitis id, sequi maxime iure in!
            </p>
            <div className="nav-bottom">
              <a href="#">Contact us</a>
              <a href="#">Legal</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className="welcome-wrapper">
          <div className="center-content">
            <h2>Welcome back</h2>
            <p className="login">
              Login into your hydrogen dashboard with your credentials
            </p>
          </div>
          <form action="">
            <div className="Email-input">
              <label>Email or Phone number</label> <br />
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter your email address or phone number"
                onChange={handleChange}
              />
            </div>
            <div className="password-input">
              <div>
                <label>Password</label>
                <a href="#">Forget Password</a>
              </div>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="***********"
                onChange={handleChange}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="check-box">
              <input type="checkbox" /> <span>Remember me</span>
            </div>
            <button onClick={handleSubmit}>{loading? 'loading...': 'Login'}</button> <br /> <br />
            {/* <button className="">
              <Link style={{ color: "white" }} to="/dashboard">
                Dashboard
              </Link>
            </button> */}
          </form>
          <div className="join">
            <p>
              Don't have an account yet? <span>Join Hydrogen Payroll</span>
            </p>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default Login;
