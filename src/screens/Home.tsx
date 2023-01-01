import React, { useEffect, SyntheticEvent } from "react"
import { useNavigate, useLocation } from 'react-router-dom';

const Homepage = () => {  // This Homepage code from react_javascript project
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[navigate])

    let location = useLocation();
    console.log(location.state);

    const logout = async(e:SyntheticEvent)=>{
        e.preventDefault();
        console.log('Logout');

        // CLEAR DATA FROM STORAGE
        localStorage.clear();
        sessionStorage.clear();

        navigate("/login");
    }

    return (
        <div>
            <h1>Homepage</h1>
            <h2>Hello {location.state}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Homepage