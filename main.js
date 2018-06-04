let sectionHE = document.querySelector(".article__header")
sectionHE.textContent = "Welcome to Brett's blog"

const allHeaders= document.querySelectorAll(".article__header")
for (i=0; allHeaders.length; i++){
allHeaders.classList.add(" Important")
}
console.log(allHeaders)