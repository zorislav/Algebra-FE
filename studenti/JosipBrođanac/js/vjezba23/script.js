const getX = () => Math.random() >= 0.5;

const prom = new Promise((resolve, reject) => {

 const x = getX();

  if(x) {
    return setTimeout(() => resolve(x), 1000);
  } else{
    return setTimeout(reject, 1000);
  }

});

prom
.then(value => console.log(`Yay! ${value}`))
.catch(() => console.log("Oh, No!"))