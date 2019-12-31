import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/NotFound.css";

function NotFound(){
    return (
        <div className="NotFound">
            <h1>404 : Not Found</h1>
            <Link className="btn btn-primary" to="/">Go to Home</Link>
        </div>
        
    );
}

export default NotFound;