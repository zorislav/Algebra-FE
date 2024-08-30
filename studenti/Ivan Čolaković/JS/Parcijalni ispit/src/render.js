
// Funkcija koja kreira i vraca li element
export const createElement = (songData) => {
  
  // Kreiraj elemente
  const listItem = document.createElement('li');
  const listItemP = document.createElement('p');


  // Popuni sadrzaj elemenata
  listItemP.innerHTML = `${songData.artist} - ${songData.song}`;

  // Dodaj li elementu elemente djecu
  listItem.appendChild(listItemP);

  return listItem;

}