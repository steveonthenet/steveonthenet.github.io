DOM = {
    row_1: document.querySelector(".row-1")
}



let userRow1, userRow2, userRow3, userRow4, userRow5;
userRow1 = ""; 

wordOfTheDay = "word1";

let letterCounter = userRow1.length;
let triesLeft = 5;

(function updateTriesLeft() {
    document.querySelector(".number-of-tries").innerHTML = triesLeft;
})();


document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;
    
    if (name != "Enter") {
        addToString(name);
    } else if (name == "Enter" && letterCounter == 5) {
        checkForMatch();
    }
  }, false);






function checkForMatch() {
    if (userRow1 == wordOfTheDay) { //user is correct - end game
        document.querySelector(".row-1").style.color = "green";
        document.querySelector(".row-1").classList.add("blink");
        toggleCorrectGif()
        setTimeout(toggleCorrectGif,[3000])
        document.querySelector(".flex-grid-container").classList.toggle("hide-game")
        document.querySelector(".title").innerHTML = "Come back tomorrow for the next word!";
        document.querySelector(".title").classList.toggle("blink-fast");
    } else { //user is wrong.
        showWhatsWrong(userRow1)
        if (triesLeft > 1) {
            toggleWrongGif() //display gif
            setTimeout(toggleWrongGif,[1200])
        } else { 
            toggleStillWrongGif() //display gif
            setTimeout(toggleStillWrongGif,[2000])
        }


        triesLeft --;
        for (i = 0; i < 5; i++) {
            document.querySelector(".row-1").children[i].innerHTML = "";
        }
        

        document.querySelector(".number-of-tries").innerHTML = triesLeft;
        userRow1 = "";
        letterCounter = userRow1.length;
    }
}

function showWhatsWrong(word) {
    for (let i = 0; i < 5; i++) {
        if (word[i] == wordOfTheDay[i]) { 
            document.querySelector(".row-1").children[i].style.color = "green";
        } else if (wordOfTheDay.indexOf(word[i]) != -1) { 
            document.querySelector(".row-1").children[i].style.color = "orange";
        } else {
            document.querySelector(".row-1").children[i].style.color = "gray";
        }
    }
}



function addToString(keypress) {
    if (userRow1.length <5) {
        userRow1 += keypress;
        document.querySelector(".row-1").children[letterCounter].innerHTML = keypress;
        letterCounter ++;
    } else {
        alert("Submit your word")
    }
    
}

function toggleWrongGif() {
    document.querySelector(".wrong-gif").classList.toggle("hide-gif")
}
function toggleCorrectGif() {
    document.querySelector(".correct-gif").classList.toggle("hide-gif")
}

function toggleStillWrongGif() {
    document.querySelector(".still-wrong-gif").classList.toggle("hide-gif");
}

//clear dom