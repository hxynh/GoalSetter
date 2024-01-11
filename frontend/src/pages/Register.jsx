import { FaUser } from "react-icons/fa"

function Register() {
    
    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        if(data.password !== data.confirmPassword) {
            console.log("Passwords do not match")
        }else {
            console.log("Passwords match")
        }
    }

  return (
    <>
        <section className="heading">
            <h1>
                <FaUser />Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                    />
                </div>
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
                    <input 
                        type="password" 
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register