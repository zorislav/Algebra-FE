// let term = "";


const updateTerm = (term) => {
  document.getElementById("songs").innerHTML = "";
  
  //   term = document.getElementById("search").value;
  //   console.log("term");
  if (!term || term === "") {
    
  } else {
    const url = `https://itunes.apple.com/search?term=${term}`;
    // console.log(url);
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        const artists = data.results;
        // console.log(artists.results);
        return artists.map((result) => {
          //Kreiranje HTML elementa
          
          const songContainer = document.getElementById("songs");
          const rezultati = document.createElement("article");
          let artist = document.createElement("span");
          let song = document.createElement("span");
          let artistName = document.createElement("span");
          let songName = document.createElement("span");

         
          artistName.appendChild(document.createTextNode("Artist name: "));
          songName.appendChild(document.createTextNode("Song Name: "));

          

          //Dodavanje sadržaja

          artist.innerHTML = result.artistName;
          song.innerHTML = result.trackName;

          rezultati.appendChild(artistName)
          rezultati.appendChild(artist);
          rezultati.appendChild(songName)
          rezultati.appendChild(song);

          songContainer.appendChild(rezultati);
        });
      })
      .catch((error) => console.log("Zahtjev neuspješan:", error));
  }
};

// const updateTerm = async (term) => {
//   try {
//     // console.log(term)
//     document.getElementById("songs").innerHTML = "";
//     if (term === "") return;
//     const url = `https://itunes.apple.com/search?term=${term}`;
//     let req = await fetch(url);
//     let data = await req.json();
//     let artists = data?.results;
//     // console.log("aaa",JSON.stringify(artists))

//     artists.map((result) => {
//       const songContainer = document.getElementById("songs");
//       const rezultati = document.createElement("article");
//       let artist = document.createElement("h2");
//       let song = document.createElement("h3");
//       artist.innerHTML = result.artistName;
//       song.innerHTML = result.trackName;
//       rezultati.appendChild(artist);
//       rezultati.appendChild(song);

//       songContainer.appendChild(rezultati);
//     });
//   } catch (e) {
//     console.log(`Not so fast big boy: ${e.message}`);
//   }
// };

// search.addEventListener("input", updateTerm);

search.addEventListener("input", (e) => {
  const value = e.target.value.trim().toLowerCase();

  
  //   console.log(value);
  updateTerm(value);


});
