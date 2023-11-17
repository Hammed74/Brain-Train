const gameBoard = () => {
  const cards = document.querySelectorAll(".card");
  const startBtn = document.querySelector("#start");
  let cardsFaceUp = true;
  let timerInterval;
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
      if (card.style.transform === "") {
        card.style.transform = "rotateY(180deg)";
        cardsFaceUp = false;
      } else if (card.style.transform == "rotateY(180deg)") {
        card.style.transform = "";
        cardsFaceUp = true;
      }
    });
  }
  flipBtn.addEventListener("click", flipCards);

  function startTimer() {
    clearInterval(timerInterval);
    const startTime = new Date().getTime(); // Get the current time in milliseconds
    const timer = document.querySelector(".timer");
    timerInterval = setInterval(() => {
      const currentTime = new Date().getTime(); // Get the current time again
      const elapsedTime = currentTime - startTime; // Calculate elapsed time in milliseconds
      const remainingSeconds = Math.ceil((11000 - elapsedTime) / 1000); // Calculate remaining seconds
      timer.textContent = remainingSeconds;
      if (remainingSeconds <= 0) {
        clearInterval(timerInterval); // Stop the timer when 10 seconds have elapsed
        console.log("Timer finished!");
        flipCards()
      } else {
        console.log(`Remaining time: ${remainingSeconds} seconds`);
      }
    }, 1000); // Update the timer every second (1000 milliseconds)
  }

  startBtn.addEventListener("click", () => {
    countdownTimer = 10;
    startBtn.style.top = "0";
    randomCardGenerator();
    startTimer();
    startBtn.textContent = "RESTART";
    if (startBtn.textContent === "RESTART" && !cardsFaceUp) {
      flipCards();
    } else {
      startBtn.textContent === "RESTART";
      console.log("start clicked");
    }
  });
  randomCardGenerator();
  startTimer;
  return {
    startTimer,
    randomCardGenerator,
  };
};

gameBoard();

const startGame = () => {
  const backOfCards = document.querySelectorAll(".back");
  const icons = document.querySelectorAll(".drag-icons");
  const iconContainer1 = document.querySelector(".icon1");
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
  });
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
      iconCopy.draggable = true;
      console.log(selected.id);
      iconCopy.classList.add("drag-icons");
      if (selected.id === "1") {
        iconCopy.id = "1";
        iconContainer1.appendChild(iconCopy);
      } else if (selected.id === "2") {
        iconCopy.id = "2";
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
      selected = null;
    });
  });
};

startGame();
