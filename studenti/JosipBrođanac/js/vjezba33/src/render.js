export const createElement = (songData) => {

  const listItem = document.createElement("li");
  const listItemP = document.createElement("p");

  listItemP.innerHTML = `${songData.artist} - ${songData.song}`;

  listItem.appendChild(listItemP);

  return listItem;

}