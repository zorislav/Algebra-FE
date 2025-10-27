import logo from "./logo.svg";
import "./App.css";
import GroceryAdd from "./components/GroceryAdd";
import { GroceriesList } from "./components/GroceriesList";

function App() {
  return (
    <div className="App">
      <h1>My Groceries - Powerd by Mobx!</h1>
      <GroceryAdd />
      <GroceriesList />
    </div>
  );
}

export default App;
