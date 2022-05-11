//look at his github to compare/contrast

let headCount = 0;
    if(localStorage.getItem("headCount") !== null){
        headCount = parseInt (localStorage.getItem("headCount"))
    }
let tailsCount = 0;
if(localStorage.getItem("tailsCount") !== null){
    tailsCount = parseInt (localStorage.getItem("tailsCount"))
}

document.querySelector("#flip").addEventListener("click",
function(){
    // console.log("I was clicked!")
    let isHeads = Math.random() < 0.5;
    
    if(isHeads){
        console.log("It's heads!", headCount)
        //Need this below so it has an image to go back to.
        document.querySelector("#head-img").src = "./assets/images/head.png"
        document.querySelector('#outcome-header').textContent="You flipped heads!"

        headCount++

        document.querySelector('#number-heads').textContent = headCount;
    } else {
        // console.log("It's tails!")
        document.querySelector("#head-img").src = "./assets/images/tails.png"
        document.querySelector('#outcome-header').textContent="You flipped tails!"

        tailsCount++

        document.querySelector('#number-tails').textContent = tailsCount;
    }

    localStorage.setItem("headCount", headCount);
    localStorage.setItem("tailsCount", tailsCount);

    let total = headCount + tailsCount;
    let percentHeads = Math.round(headCount/total * 100);
    let percentTails = Math.round(tailsCount/total * 100);

    document.querySelector("#percent-heads").textContent = percentHeads + "%";
    document.querySelector("#percent-tails").textContent = percentTails + "%";
})








//See if I can make this simpler
document.querySelector("#clear").addEventListener("click",
function(){
    document.querySelector("#percent-heads").textContent = "0%";
    percentHeads = 0;
    document.querySelector("#percent-tails").textContent = "0%";
    percentTails = 0;
    document.querySelector("#number-heads").textContent = "0";
    headCount = 0;
    document.querySelector("#number-tails").textContent = "0";
    tailsCount = 0;
})