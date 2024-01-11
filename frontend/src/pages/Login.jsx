import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

function Login() {

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());        
    }

  return (
    <>
        <section className="heading">
            <h1>
                <FaSignInAlt />Login
            </h1>
            <p>Login and start setting goals</p>
        </section>

        <section className="form">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                    type="email" 
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-nlock">Submit</button>

            </div>
            </form>
        </section>
    </>
)
}

export default Login