import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <h1>Page Not Found ERROR 404</h1>
            <Link to="/">Back to home Page</Link>
        </div>
    )
}
