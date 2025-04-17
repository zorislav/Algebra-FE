import { observer } from 'mobx-react';

import Grocery from './Grocery';

import { groceriesStore } from '../store/groceries-store';

export const GroceriesList = observer(() => {

    const myGroceries = groceriesStore.getGroceries;

    return (
    <>
      <p>Groceries List - Total: {myGroceries.length}</p>
      <ul>
        {myGroceries.map((groc, index) => (
          <li key={index}>
            <Grocery name={groc}/>
          </li>
        ))}
      </ul>
    </>
  );

});