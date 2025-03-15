showButton = document.querySelectorAll(".plus-icon")
hideButton = document.querySelectorAll(".minus-icon")
paragraph = document.querySelectorAll(".content")

for (let i = 0; i<showButton.length; i++) {
    showButton[i].addEventListener("click", function() {
        const isActive = hideButton[i].classList.toggle("minus-icon-active")
        showButton[i].classList.toggle("plus-icon-hidden", isActive)

        if (isActive) {
            paragraph[i].style.height = "auto"
        } 
    })
}

for ( let i = 0; i< hideButton.length; i++) {
    hideButton[i].addEventListener("click", function(){
        hideButton[i].classList.remove("minus-icon-active")
        paragraph[i].style.height = "0"
        showButton[i].classList.remove("plus-icon-hidden")
    } )
}