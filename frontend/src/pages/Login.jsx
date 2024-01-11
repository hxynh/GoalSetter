import { FaSignInAlt } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
;
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import { useEffect } from "react";
import Spinner from '../components/Spinner'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess){
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate])

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());        
        const userData = {
            email: data.email,
            password: data.password
        }
        dispatch(login(userData));
    }

    if(isLoading) {
        return <Spinner />
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