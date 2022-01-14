import React from 'react'
import "./Task.css"

function Tasks() {
    return (
        <div>
            <div className="container">
                <div className="wrapper">
                    <div>
                        <img src="assets/instagram.png" alt="" />
                        <h3>Hydrogen Payroll</h3>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            qui dolores dolore non ex debitis id, sequi maxime iure in!
                        </p>
                        <div className="nav-bottom">
                            <a href="#">Contact us</a>
                            <a href="#">Legal</a>
                            <a href="#">Privacy</a>
                    </div>
                    </div>
                    
                </div>
                <div className="welcome-wrapper">
                    <h2>Welcome back</h2>
                    <p className='login'>Login into your hydrogen dashboard
                        with your credentials
                    </p>
                    <form action="">
                       <div className="Email-input">
                            <label>Email or Phone number</label> <br />
                            <input type="text" placeholder="Enter your email address or phone number" />
                       </div>
                        <div class="password-input">
                            <div>
                                <label>Password</label>  
                                <a href="#">Forget Password</a>
                            </div>
                            <input type="password" placeholder="***********" />
                        </div>
                        <div className='check-box'>
                             <input type="checkbox" /> <span>Remember me</span>
                        </div>
                        <button>Login</button>
                    </form>
                   <div className="join">
                            <p>Don't have an account yet? <span>Join Hydrogen Payroll</span></p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks
