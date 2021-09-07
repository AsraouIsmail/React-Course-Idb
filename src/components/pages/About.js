import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2>About Page</h2>
            <h5>{props.match.params.id}</h5>
            <h5>{props.match.params.name}</h5>
            <p>c'est une application en react js pour la gestion des contacts</p>
            <p>copyright Asraou Ismail &copy; 2021 -Github</p>
        </div>
    )
}
