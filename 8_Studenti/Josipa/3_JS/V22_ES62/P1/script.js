// 1. Napišite Promise koji čeka funkciju getX, i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, a na reject reagira sa console.log-om stringa "Oh no!"

// 2. Ako već niste, prepišite sve funkcije u arrow funkcije.

const getX = () => Math.random() >= 0.5; //funkcija koja vraca proizvoljnu vrijednost vece ili jednako od 0.5
const myPromise = new Promise((resolve, reject) => {
  // resolve(); - Promise ce se razrijesiti pozitivno ako napisemo reject - Promise ce se razrjesiti negativno

  const x = getX();
  if (x) {
    setTimeout(() => resolve(x), 2000);
  } else {
    setTimeout(() => reject(x), 2000);
  }
}); // Promise varijabla koja se nece mijenjati

/*myPromise
  .then((value) => console.log(`Da: ${value}`))
  .catch((value) => console.log(`Ne: ${value}`));  */

// dodajemo catch kako bi dobili opciju negativnog scenarija "Ne"

// tretiramo samo pozitivan ishod
/* const myPromise = new Promise((resolve, reject) => {
   setTimeout(resolve, 2000);
 });

myPromise.then(() => console.log("Da")); */

const myAsyncFn = async () => {
  try {
    const value = await myPromise; // await - cekaj dok promise bude razrjesen onda pospremi resolve ili reject u value
    console.log(`Da: ${value}`);
  } catch (value) {
    console.log(`Ne: ${value}`);
  }
};

myAsyncFn();
