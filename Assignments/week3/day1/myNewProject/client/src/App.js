import {Router} from "@reach/router"
import HomePage from "./components/HomePage";
import DisplayOneProduct from "./components/DisplayOneProduct";

function App() {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <DisplayOneProduct path="/api/product/:id" />
      </Router>
    </div>
  );
}

export default App;
