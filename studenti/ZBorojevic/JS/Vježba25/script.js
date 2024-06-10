anime({
  targets: `.box`,
  translateX: 250,
  translateY: 150,
  duration: 2000,
  easing: 'easeInOutElastic(1, .6)',
  loop: true
})

let box = document.querySelector(".box2")
box.animate([
  { transform: `translate(0)`},
  { transform: `translate(100px, 100px)`}
], 2000)

