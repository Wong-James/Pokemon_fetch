import React from 'react'
import './App.css';
import NewComponent from './components/NewComponent'
import PersonCard from './components/NewComponent';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"John"} lastName={"Smith"} age={45} hairColor={"Blonde"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Grey"}/>
      <PersonCard firstName={"Jane"} lastName={"Fonda"} age={65} hairColor={"Dirty Blonde"}/>
      <PersonCard firstName={"Maria"} lastName={"Dear"} age={35} hairColor={"Brown"}/>
      <NewComponent firstName={"John"} lastName={"Smith"} age={45} hairColor={"Blonde"}/>
      <NewComponent firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Grey"}/>
      <NewComponent firstName={"Jane"} lastName={"Fonda"} age={65} hairColor={"Dirty Blonde"}/>
      <NewComponent firstName={"Maria"} lastName={"Dear"} age={35} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
