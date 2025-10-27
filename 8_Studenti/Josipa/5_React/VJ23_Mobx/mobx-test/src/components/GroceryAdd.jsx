import { useState } from "react";
import { groceriesStore } from "../store/groceries-store";

function GroceryAdd() {
  const [grocery, setGrocery] = useState("");

  function groceryChangeHandler(event) {
    setGrocery(event.target.value);
  }

  function groceryAddHandler() {
    // Spremi lokalno stanje u globalno stanje
    groceriesStore.addGrocery(grocery);
    setGrocery("");
  }

  return (
    <>
      <label htmlFor="kupi">Kupiti: </label>
      <input
        id="kupi"
        type="text"
        value={grocery}
        onChange={groceryChangeHandler}
      ></input>
      <button onClick={groceryAddHandler}>Add</button>
    </>
  );
}

export default GroceryAdd;
