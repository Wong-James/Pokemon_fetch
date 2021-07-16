import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const[pokemons, setPokemons] = useState([]);
  const[clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true)
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
          .then(response => {
            const name = response.data.results.map(pokemon =>{
            return pokemon.name
          })
          setPokemons([...name])
        }).catch(err=>{
            console.log(err);
        });
  }


  return (
    <div className="App">
      <button className="btn btn-outline-dark btn-lg btn-block" onClick={handleClick}>Go Fetch</button>
      {clicked ? <ul>
        {
          pokemons.map(pokemon=><li className="list-group-item">{pokemon}</li>)
        }
      </ul> : null}
    </div>
  );
}

export default App;
