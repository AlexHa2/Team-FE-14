import React from 'react'
import "./PageNotFound.css"
import { Link } from 'react-router-dom'
export default function PageNotFound() {
    console.log("something")
    return (
        <div style={{ textAlign: 'center', padding: '50px', color: "red", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center",height:"100vh" }}>
            <div>
                <h1 style={{fontSize:"100px"}}>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link to="/">Go Back Home</Link>
            </div>
        </div>
    )
}
