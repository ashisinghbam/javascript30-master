function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



// const allDiv = document.querySelectorAll(".key")

// document.addEventListener("keyup", (e) => {
//   const pressedKey = e.key.toUpperCase()
//   allDiv.forEach((div) => {
//     div.classList.remove("playing")
//     const dataKey = div.dataset.key
//     if (dataKey === pressedKey.charCodeAt(0).toString()) {
//       const audio = document.querySelector(`audio[data-key = "${dataKey}"]`)
//       if (audio) {
//         audio.play()
//         div.classList.add("playing")
//         setTimeout(() => {
//           div.classList.remove("playing")
//         }, 500)
//       }
//     }
//   })
// })


