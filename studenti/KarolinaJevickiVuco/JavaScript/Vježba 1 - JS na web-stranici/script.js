var div = document.getElementsByTagName("div")[0]; 
console.log(div);   /*time će se ispisati sadržaj div*/




/*document = element koji predstavlja cijeli naš html-dokument*/
/* getElementsByTagName("div")  - ta funkcija će nam vratiti pokazivače na sve div elemente u našem dokumentu 
zato targetiramo naš div koji je prvi u nizu ovako: [0]   */
/*ako ostavimo js gore u index elementu - nema se što prikazati jer u trenutku kad se izvršava js nije browser još došao do div elementa i nema se što prikazati*/