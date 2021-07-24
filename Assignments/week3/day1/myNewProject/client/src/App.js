import {Router} from "@reach/router"
import HomePage from "./components/HomePage";
import EditProduct from "./components/EditProduct";
import DisplayOneProduct from "./components/DisplayOneProduct";

function App() {
  
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <DisplayOneProduct path="/api/product/:id" />
        <EditProduct path="/api/product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
