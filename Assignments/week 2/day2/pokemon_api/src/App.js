import './App.css';
import {useState} from 'react'


function App() {
  const[pokemons, setPokemons] = useState([]);
  const[clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true)
    fetch("https://pokeapi.co/api/v2/pokemon?limit=810")
          .then(response => {
            return response.json();
        }).then(response => {
          const name = response.results.map(pokemon =>{
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
