import './App.css';
import Tabs from './components/tabs'

function App() {

  const tabs = [
    {
      title : "Tab 1",
      content: "Hi it's tab 1" 
    },
    {
      title : "Tab 2",
      content: "Hi it's tab 2" 
    },
    {
      title : "Tab 3",
      content: "Hi it's tab 3" 
    },
  ]

  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
