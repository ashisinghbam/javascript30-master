const allPanels = document.querySelectorAll(".panel")

allPanels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.toggle("open")
  })
})
allPanels.forEach((panel) => {
  panel.addEventListener("transitionend", (e) => {
    // console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
      panel.classList.toggle("open-active")
    }
  })
})
