const imageContainerEL = document.querySelector(".imageContainer")
const prevEL = document.getElementById("prev")
const NextEL = document.getElementById("Next")

let x = 0 
let timeOut = 
prevEL.addEventListener("click", ()=>{
     x = x + 45 ;
     updateGallery ()
})
function updateGallery() {
    imageContainerEL.style.transform = `perspective(1000px) rotateY(${x}deg)`
    setTimeout(()=>{
    x = x - 45 
    updateGallery ()
    },3000)
}
NextEL.addEventListener("click", ()=>{
    x = x - 45 ;
    updateGallery ()
})
updateGallery ()