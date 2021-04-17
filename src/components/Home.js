import React, { useEffect } from 'react'
import { Link, Redirect } from "react-router-dom";

function Home() {

    return (
        <div>
            <h1>Home component</h1>
            <Link to="/admin">Admin Page</Link>
        </div>
    )
}

export default Home
