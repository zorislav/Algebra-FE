
/* 1. Napišite Promise koji čeka funkciju getX, i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, a na reject reagira sa console.log-om stringa "Oh no!"

2. Ako već niste, prepišite sve funkcije u arrow funkcije. */

const getX = () => Math.random() >= 0.5;


const prom = new Promise((resolve, reject) => {

  const x = getX();

  if(x) {
    return setTimeout(() => resolve(x) , 1000);
  } else {
    return setTimeout(reject, 1000);
  }

});

prom
.then(value => console.log(`Yay! ${value}`))
.catch(() => console.log("Oh, No!"));
