const gameBoard = () => {
  const cards = document.querySelectorAll(".card");
  function randomCardGenerator() {
    cards.forEach((card) => {
      let randomNum = Math.floor(Math.random() * 4 + 1);
      if (randomNum === 1) {
        card.style.backgroundImage = "url(assets/helmet.png)";
      } else if (randomNum === 2)
        card.style.backgroundImage = "url(assets/soccer.png)";
      else if (randomNum === 3) {
        card.style.backgroundImage = "url(assets/basketball.png)";
      } else if (randomNum === 4) {
        card.style.backgroundImage = "url(assets/baseball.png)";
      }
    });
  }

  const flipBtn = document.querySelector(".flip");
  function flipCards() {
    cards.forEach((card) => {
      if (card.style.transform === "") card.style.transform = "rotateY(180deg)";
      else if (card.style.transform == "rotateY(180deg)") {
        card.style.transform = "";
      }
    });
  }
  flipBtn.addEventListener("click", flipCards);
  return randomCardGenerator();
};

gameBoard();

const startGame = () => {
  const backOfCards = document.querySelectorAll(".back");
  const icons = document.querySelectorAll(".drag-icons");
  const iconContainer1 = document.querySelector(".icon1")
  const iconContainer2 = document.querySelector(".icon2");
  const iconContainer3 = document.querySelector(".icon3");
  const iconContainer4 = document.querySelector(".icon4");
  let selected;
  
  icons.forEach((icon) => {
    icon.addEventListener("dragstart", (event) => {
      icon.style.width = "70%";
      selected = event.target;
      console.log(selected);
    });
  })
    backOfCards.forEach((back) => {
      back.addEventListener("click", () => {
        console.log("You clicked the back");
      });
      back.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      back.addEventListener("drop", (event) => {
        const iconCopy = document.createElement("img");
        iconCopy.src = `${selected.src}`;
        iconCopy.draggable = true
        console.log(selected.id);
        iconCopy.classList.add("drag-icons");
        if (selected.id === "1") {
            iconCopy.id = "1"
          iconContainer1.appendChild(iconCopy);
        } else if (selected.id === "2") {
            iconCopy.id = "2"
          iconContainer2.appendChild(iconCopy);
        } else if (selected.id === "3") {
            iconCopy.id = "3";
          iconContainer3.appendChild(iconCopy);
        } else if (selected.id === "4") {
            iconCopy.id = "4";
          iconContainer4.appendChild(iconCopy);
        }
        
        iconCopy.addEventListener("dragstart", (event) => {
          iconCopy.style.width = "70%";
          selected = event.target;
         
        });

      
        back.appendChild(selected);
        selected = null
        
      });
    });
};

startGame();
