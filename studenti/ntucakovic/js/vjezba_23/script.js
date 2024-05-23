const getX = () => Math.random() >= 0.5;


const prom = new Promise((resolve, reject) => {

  const x = getX();

  if(x) {
    return setTimeout(() => reseolve(x), 1000);
  } else {
    return setTimeout(reject, 1000);
  }

});

fetch()

prom
.then(value => console.log(`Yay! ${value}` ))
.catch(() => console.log("Oh, No!"));