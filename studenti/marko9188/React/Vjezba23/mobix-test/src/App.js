import { GroceriesList } from "./components/GroceriesList";
import GroceryAdd from "./components/GroceryAdd";

function App() {
  return (
    <>
      <h1>My Groceries - Powered by Mobx!</h1>
      <GroceriesList />
      <GroceryAdd />
    </>
  );
}

export default App;
