const text = "Žašto kažeš da sam loš đak?";

var re = new RegExp("[žščćđ]", "ig");

console.log(text.match(re));
console.log(re.test(text));

const semafor = 1;

const prom = new Promise((resolve, reject) => {
  if (semafor === 1){
    setTimeout(()=>{
      resolve("Da");
    }, 2000);
  } else if(semafor === 0){
    reject("Ne!");
  } else {
    throw new Error("Greška!");
  }
});

prom.then((res)=>{
  console.log(res);
}, (rej)=>{
  console.log(rej);
}).catch(error => console.log(error));