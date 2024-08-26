const getX = () => Math.random() >= 0.5;

var wait = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000);
  }
  return setTimeout(reject, 1000);
})
.then(value => console.log(value))
.catch(() => console.log('Oh no!'));
