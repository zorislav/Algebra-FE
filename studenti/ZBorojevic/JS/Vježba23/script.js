const getX = () => Math.random() >= 0.5;

new Promise((resolve, reject) => {
  const x = getX()
  if (x) {
    return setTimeout(resolve, 1000)
  } else {
    return setTimeout(reject, 1000)
  }
})

.then(() => console.log("Yay!"))
.catch(() => console.log("Oh, no!"))

