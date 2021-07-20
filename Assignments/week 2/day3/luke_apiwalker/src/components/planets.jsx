import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from "@reach/router"

const Planets = ({ id }) => {
    const [planets, setPlanets] = useState(null);

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
        .then(response => {
            setPlanets(response.data);
        }).catch(() => navigate("/error"))
    }, [id]);
    

    if(planets == null) {
        return "Loading..."
    }

    return (
        <div>
            <h1>{planets.name}</h1>
            <p>Rotation Period: {planets.rotation_period}</p>
            <p>Climate: {planets.climate}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Gravity: {planets.gravity}</p>
        </div> 
    )
}

export default Planets;