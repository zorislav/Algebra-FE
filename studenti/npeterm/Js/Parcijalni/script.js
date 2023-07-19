const dataUserTemplate=document.querySelector("[data-user-template]")
const dataUserContainer=document.querySelector("[data-user-container]")
const dataSearch=document.querySelector("[data-search]")
const loader=document.querySelector("[data-loader]")
const eror1=document.getElementById("eror1")
const eror2=document.getElementById("eror2")
const eror3=document.getElementById("eror3")
//const art=document.querySelector("[data-art]")
//const sound=document.querySelector("[data-preview]")
//const SN=document.querySelector("[data-song]")
//const AN=document.querySelector("[data-artist]")
//const AL=document.querySelector("[data-album]")
///////////////////////////////////////////////
//////////////////////LOADER//////////////////
let SMT=[]
function HL(){
    loader.style.display="none";
}
function SL(){
    loader.style.display="block";
}
///////////////////////////////////////////////
////////////////ON TYPE///////////////////////
dataSearch.addEventListener("input",e=>{
    const input=e.target.value.toLowerCase()
    dataUserContainer.innerHTML="";
    searching(input);
})
async function searching(input){
    SL();
    HE1();
    HE2();
    HE3();
    if(input===''){
        SE1();
        HL();
        //dataUserContainer.remove();
        return;
    }
    try{
      let songs= await fetching(input);
        if(songs.resultCount===0){
            SE2();

        }else{
            display(songs);
            HL();
        }
    }catch(error){
        console.log(error);
        SE3();
    }

}
///////////////////////////////////////////////
/////////////FETCHING//////////////////////////
async function fetching(input){
    try{
        const response= await fetch(`https://itunes.apple.com/search?term=${input}&entity=song`);
        const data= await response.json();
        let songs= data.results;
        //console.log(songs);
        return songs;
        
        
 }catch (error){
    console.log(error);
}
}
///////////////////////////////////////////////
////////////////DISPLAY///////////////////////
function display(songs){
    SMT = songs.map(song =>{
        //console.log(song);
       const clone= dataUserTemplate.content.cloneNode(true).children[0];
      // console.log(song);
      // console.log(clone);
       const SN=clone.querySelector("[data-song]")
       const AN=clone.querySelector("[data-artist]")
       const AL=clone.querySelector("[data-album]")
       const AT=clone.querySelector("[data-art]")
       const SP=clone.querySelector("[data-preview]")
        SN.textContent=song.trackName;
       AN.textContent=song.artistName;
       AL.textContent=song.collectionName;
       SP.src=song.previewUrl;
       AT.src=song.artworkUrl100;
       console.log(SP);
       dataUserContainer.append(clone);
       
       
    
        return{SN: song.trackName, AN: song.artistName, AL:song.collectionName,AT:song.previewUrl,SP: song.artworkUrl100, element: clone}
    
    });
}
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
function SE1(){
    eror1.style.display="block";
}
function SE2(){
    eror2.style.display="block";
}
function SE3(){
    eror3.style.display="block";
}
function HE1(){
    eror1.style.display="none";
}
function HE2(){
    eror2.style.display="none";
}
function HE3(){
    eror3.style.display="none";
}
//fetching();
