const root = document.querySelector(":root")
const img = document.querySelector(".image")
const spacing = document.querySelector('input[name="spacing"]')
const blur = document.querySelector('input[name="blur"]')
const base = document.querySelector('input[name="base"]')


const allStyles = getComputedStyle(root)

// let currentSpacing = allStyles.getPropertyValue("--spacing")
// console.log(currentSpacing);

spacing.addEventListener("input", (e) => {
  let unit = spacing.dataset.sizing
  let currentSpacing = spacing.value
  img.style.setProperty("--spacing", `${currentSpacing}${unit}`)
})
blur.addEventListener("input", (e) => {
  let unit = blur.dataset.sizing
  let currentBlur = blur.value
  img.style.setProperty("--blur", `${currentBlur}${unit}`)
})

base.addEventListener('input', (e) => {
  let currentBase = base.value
  img.style.setProperty("--base-color", `${currentBase}`)
})
base.addEventListener('change', (e) => {
  let currentBase = base.value
  img.style.setProperty("--base-color", `${currentBase}`)
})


