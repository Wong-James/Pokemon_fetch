import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from "@reach/router"

const Starships = ({ id }) => {
    const [starships, setStarships] = useState(null);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + id)
        .then(response => {
            setStarships(response.data);
        }).catch(() => navigate("/error"))
    }, [id]);
    

    if(starships == null) {
        return "Loading..."
    }

    return (
        <div>
            <h1>{starships.name}</h1>
            <p>Model: {starships.model}</p>
            <p>Manufacturer: {starships.manufacturer}</p>
            <p>Cost in Credits: {starships.cost_in_credits}</p>
            <p>Max Atmosphering Speed: {starships.max_atmosphering_speed}</p>
            <p>Crew: {starships.crew}</p>
            <p>Passengers: {starships.passengers}</p>
        </div> 
    )
}

export default Starships;