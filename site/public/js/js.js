const signUpFormButtonsNext = document.querySelectorAll(".multiplePageForm a.next")
const signUpFormButtonsPrevious = document.querySelectorAll(".multiplePageForm a.previous")

signUpFormButtonsNext.forEach((button, i) => {
  button.addEventListener("click", () => {
    document.body.style.setProperty("--signUpFormPosish", `-${((i + 1) * 44)}vh`)
  })
})

signUpFormButtonsPrevious.forEach((button, i) => {
  button.addEventListener("click", () => {
    document.body.style.setProperty("--signUpFormPosish", `-${(i * 44)}vh`)
  })
})
