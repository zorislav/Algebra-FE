
import GroceryAdd from './components/GroceryAdd';
import { GroceriesList } from './components/GroceriesList';
import { observer } from 'mobx-react';
import { groceriesStore } from './store/groceries-store';

import './App.css';

const App = observer( () => {

  const myGroceries = groceriesStore.getGroceries;

  return (
    <div className="App">
      <h1>My Groceries - Powered by Mobx!</h1>
      <p>Groceries List - Total: {myGroceries.length}</p>  
      <GroceryAdd/>
      <GroceriesList/>
    </div>
  );
});

export default App;
