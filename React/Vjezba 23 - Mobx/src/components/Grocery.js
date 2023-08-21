import { groceriesStore } from '../store/groceries-store';

function Grocery({name}) {

  function onClickHandler(name) {
    groceriesStore.deleteGrocery(name);
  }

  return (
    <>
      <p onClick={() => onClickHandler(name)}>{name}</p>
    </>
  );
}

export default Grocery;