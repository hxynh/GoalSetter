import { FaUser } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
;
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
import { useEffect } from "react";
import Spinner from '../components/Spinner'


function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        if(data.password !== data.confirmPassword) {
            toast.error('Passwords do not match')
        }else {
            const userData = {
                name: data.name, 
                email: data.email,
                password: data.password
            }
            
        console.log(userData)
            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
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