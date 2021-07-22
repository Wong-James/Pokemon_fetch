import React, {useState} from 'react'
import CreateProduct from "./CreateProduct"
import DisplayProduct from "./DisplayProduct";

const HomePage = props => {
  const [submitState, setSubmitState] = useState(false)

  return (
    <div className="App">
      <CreateProduct submitState={submitState} setSubmitState={setSubmitState}/>
      <DisplayProduct submitState={submitState}/>
    </div>
  );
}

export default HomePage