let sectionHE = document.querySelector(".article__header")
sectionHE.textContent = "Welcome to Brett's blog"

const allHeaders= document.querySelectorAll(".article__header")
for (i=0; i < allHeaders.length; i++){
allHeaders[i].classList.add("Important")
}
console.log(allHeaders)