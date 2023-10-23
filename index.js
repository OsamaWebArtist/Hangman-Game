let letterDiv = document.querySelector(".letters")
let categories = document.querySelector(".from-word span")
let wordsLett = document.querySelector(".Words")
let hangMan = document.querySelectorAll(".hang-man div")
let arrOfMan = Array.from(hangMan);

let statufalse = false;

let activeHangMan = 0;
let alphabet_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let data = {
    movies: ['The Shawshank', 'The Godfather', 'Pulp Fiction', 'The Dark Knight'],
    countries: ['United States', 'United Kingdom', 'France', 'Germany'],
    games: ['The Legend of Zelda', 'The Witcher', 'Red Dead Redemption ', 'Super Mario']
};


for (let i = 0; i < alphabet_array.length; i++){
    let creatletter = document.createElement("span");
    creatletter.textContent = alphabet_array[i];
    letterDiv.appendChild(creatletter)
    }
let letter_s = document.querySelectorAll(".letters span");


function start() {
    letter_s.forEach((ele) => {
        ele.addEventListener("click", function (e) {
            e.currentTarget.classList.add("clicked");
        })
    });
}
    
start();
middle();
function middle() {

    let objkey = Object.keys(data);
    let randomId = Math.trunc(Math.random() * Object.keys(data).length);
    let randomkey = objkey[randomId]
    categories.textContent = randomkey;
    let valueofKeys = data[randomkey]
    console.log(data[randomkey])
    let oneOfValue = valueofKeys[Math.trunc(Math.random() * valueofKeys.length)]
    
    let ToArr = oneOfValue.toLowerCase();
    let toArrplus = ToArr.split("")
    for (let i = 0; i < ToArr.length; i++) {
        let creatspan = document.createElement("span")
        creatspan.textContent = ToArr[i];
        wordsLett.appendChild(creatspan)
    }

    let wordlettSpan = document.querySelectorAll(".Words span");
    let arrwordlettSpan = Array.from(wordlettSpan);
    for (let i = 0; i < wordlettSpan.length; i++) {
        if (wordlettSpan[i].textContent === " ") {
            wordlettSpan[i].style.opacity = "0";
        }
        
        
    }

    letter_s.forEach((ele) => {
        ele.addEventListener("click", function (e) {
            
            for (let i = 0; i < wordlettSpan.length; i++) {
                if (e.currentTarget.textContent.toLowerCase() === wordlettSpan[i].textContent.toLowerCase()) {
                    wordlettSpan[i].classList.add("right-let");
                    statufalse = true;
                } else {
                    statufalse = false;
                }
            }
        })
        
    })
    
        
        
        document.addEventListener("click", function (e) {
            let targetLett = e.target.textContent.toLowerCase();
            let indexofLett = toArrplus.indexOf(targetLett);
            let indofLett = toArrplus[indexofLett];
        if (e.target.classList.contains("clicked")) {
            if (targetLett !== indofLett) {
                arrOfMan[activeHangMan].classList.add("visibleHangMan");
                activeHangMan++;
            }
            }
            let loseGame = document.querySelector(".legs-man")
        if (loseGame.classList.contains("visibleHangMan")) {
            wordlettSpan.forEach((ele) => {
                ele.classList.remove("right-let");
                ele.classList.add("right-let");
            });
            letter_s.forEach((elem) => {
                elem.classList.remove("clicked");
                elem.classList.add("clicked")
            })
        }
    })

    
    
}
