const hourHand = document.querySelector(".hour-hand")
const minHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")

let intervalId = setInterval(() => {
  let currentHour = new Date().getHours()
  let currentMinute = new Date().getMinutes()
  let currentSecond = new Date().getSeconds()
  let rotationValSec = currentSecond * 6
  secondHand.style.transform = `rotate(${rotationValSec}deg)`
  let rotationValMin = currentMinute * 6
  minHand.style.transform = `rotate(${rotationValMin}deg)`
  let rotationValHour = currentHour * 30
  hourHand.style.transform = `rotate(${rotationValHour}deg)`
  console.log(currentHour, rotationValHour, currentMinute, rotationValMin)
}, 1000)

// intervalId = setInterval(() => {
//   count++
//   console.log(count)
//   secondHand.style.transform = `rotate(${count}deg)`
//   if (count === 360) {
//     clearInterval(intervalId)
//     count = 0
//   }
// }, 100)

// if (count < 10) {
//   count++
//   console.log(count)
//     // intervalId = setInterval(() => {
//     //   secondHand.style.transform = `rotate(${count}deg)`
//     //   console.log("working")
//     // })
// } else {
//   count = 0
//   clearInterval(intervalId)
//   console.log('else');
// }
