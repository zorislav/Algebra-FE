import { useState } from "react";
import { groceriesStore } from "../store/groceries-store";

function GroceryAdd() {

    const [grocery, setGrocery] =useState('');

    function groceryChangeHandler(event){
        setGrocery(event.target.value);
    }

    function groceryAddHandler() {
        if(grocery){
            groceriesStore.addGrocery(grocery);
            setGrocery('');
        }else{
            alert("Please enter Grocery!");
        }
    }

    return(
        <>
            <label>
                Enter Grocery:
                <input type="text" value={ grocery } onChange={groceryChangeHandler} />
            </label>
            <button onClick={groceryAddHandler}>ADD</button>
        </>
    );
}

export default GroceryAdd;