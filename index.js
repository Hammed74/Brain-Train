const gameBoard = () => {

const cards = document.querySelectorAll(".card")
function randomCardGenerator(){
cards.forEach(card =>{
    let randomNum = Math.floor((Math.random()*4)+1)
    console.log(randomNum)
    if (randomNum === 1){
        card.style.backgroundImage = "url(assets/helmet.png)"
    }else if(randomNum === 2)
        card.style.backgroundImage = "url(assets/soccer.png)"
    else if(randomNum === 3){
        card.style.backgroundImage = "url(assets/basketball.png)";
    }else if(randomNum === 4){
        card.style.backgroundImage = "url(assets/baseball.png)";
    }
})
}

const flipBtn = document.querySelector(".flip")
function flipCards(){
    cards.forEach(card =>{
        if(card.style.transform === "")
    card.style.transform = "rotateY(180deg)"
        else if (card.style.transform == "rotateY(180deg)"){
            card.style.transform = ""
        }
    })
}
flipBtn.addEventListener("click", flipCards)
return randomCardGenerator()
}

gameBoard()
