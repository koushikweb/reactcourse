import "./App.css";
import Dashboard from "./componets/Dashboard";

function App() {
  const fname = "User Listing";
  return (
    <div className="App">
      <Dashboard list={fname} />
    </div>
  );
}

export default App;
