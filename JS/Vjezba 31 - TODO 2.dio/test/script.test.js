import Td from '../script.js';

test('Todo test', () =>{

  const myTd = new Td();
  const li = myTd.createlistItem();
  expect(li.innerHTML).toBe('<div class="li-container"><div class="li-container-int"><input type="checkbox"></div><div class="removeButton"></div></div>');
});
