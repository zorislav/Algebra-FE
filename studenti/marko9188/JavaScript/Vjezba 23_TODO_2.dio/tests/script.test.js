/* eslint-disable no-undef */
import Td from'../script.js';



test('Todo test', () => {
    const myTodo = new Td();
    const el = myTodo.createListItem()
    expect(el.innerHTML).toBe('<div class="li-container"><div class="li-container-int"><input type="checkbox"></div><div class="removeButton"></div></div>');
});