// Funkcija koja kreira i vraca li element
export const createElement = (songData) => {
  
  // Kreiraj elemente
  const listItem = document.createElement('li');
  const listItemP = document.createElement('p');


  // Popuni sadrzaj elemenata
  listItemP.innerHTML = `${songData.artist} - ${songData.song}`;

  // Dodaj li elementu elemente djecu, tj. paragraf gore definiranog sadržaja
  listItem.appendChild(listItemP);

  return listItem;

}

//da bi ovu funkciju mogli iskoristili u main moramo je ovdje exportirati, a u main importirati