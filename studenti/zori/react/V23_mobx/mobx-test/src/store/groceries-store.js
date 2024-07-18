import { makeObservable, observable, computed, action } from 'mobx';

class GroceriesStore {

  groceries = [];

  constructor(){
    makeObservable(this,{
      groceries: observable,
      getGroceries: computed,
      addGrocery: action,
      deleteGrocery: action
    })
  }

  get getGroceries(){
    return this.groceries;
  }

  addGrocery(grocery) {
    this.groceries.push(grocery);
  }

  deleteGrocery(grocery) {
    this.groceries.remove(grocery);
  }

}

export const groceriesStore = new GroceriesStore();