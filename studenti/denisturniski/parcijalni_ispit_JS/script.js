
let term ='';
const updateTerm = () => {
    term = document.getElementById('search').value;
    if(!term || term ===''){

    }else{
        const url = `https://itunes.apple.com/search?term=${term}`;
    //    console.log(url);
      
      
fetch(url)
.then((response)=> response.json())
.then((data) => {
    // console.log(data.results);
    const artists = data.results;
    return artists.map(result =>{

        //Kreiranje HTML elementa

        const songContainer = document.getElementById('songs');
        const rezultati = document.createElement('article');
        artist = document.createElement('h2');
        song = document.createElement('h3');
        

        //Dodavanje sadržaja
    
        artist.innerHTML = result.artistName;
        song.innerHTML = result.trackName;
        


        rezultati.appendChild(artist);
        rezultati.appendChild(song);

        songContainer.appendChild(rezultati);


            
    })

})
        .catch(error => console.log('Zahtjev neuspješan:', error))
    }
    }




search.addEventListener('input', updateTerm);
search.addEventListener('input',(e) =>{
    const value = e.target.value.trim().toLowerCase()
    // console.log(value);
   
  

})

