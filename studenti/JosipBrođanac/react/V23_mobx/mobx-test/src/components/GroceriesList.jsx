import { observer } from 'mobx-react';
import { groceriesStore } from '../store/groceries-store';

import Grocery from './Grocery';

export const GroceriesList = observer(() => {

  const myGroceries = groceriesStore.getGroceries;

  return (
    <>
      <ul style={{listStyleType: "none"}}>
        {
          myGroceries.map((groc, index) => (
            <li key={index}><Grocery name={groc} /></li>
          ))
        }
      </ul>
    </>
  );
});


