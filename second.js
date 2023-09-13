// let horse = document.querySelector('.horse')
const stadium = document.querySelector('.stadium')
const field = document.querySelector('.race-field')
const money = document.querySelector('.money')
const betMoney = document.querySelector('input')
let awardText = document.createElement('p')
awardText.classList.add('award')
let startGame = false;



if(!localStorage.money){
    localStorage.money = 1000
}

money.innerText = `${localStorage.money}$`
let posX = 1;
let time = 40;
let yourHorse = 0
let competitors = {}
let winner;
let player;


for(let i = 0; i < 5; i++){
    let row = document.createElement('div')
    row.classList.add('row')
    let horse = document.createElement('div')
    horse.classList.add('horse')
    horse.innerText = i + 1
    horse.style.textAlign = 'center'
    horse.style.lineHeight = '5'
    horse.style.zIndex = '200'  
    horse.setAttribute('value', `${i}`)      

    row.append(horse)
    field.append(row)
}

function createHorses(){
    
}

let horses = document.querySelectorAll('.horse')


for(let i = 0; i < horses.length; i++){
    competitors[i] = 0
}


function update(player, playerIndex){    
    // if(betMoney.value != "" && /\b/g.test(betMoney.value) && startGame){
        awardText.textContent = ""    
        yourHorse = playerIndex
        player.style.mixBlendMode = "color-burn"
        money.innerText = `${+localStorage.money - +betMoney.value}$`
        localStorage.money = +localStorage.money - +betMoney.value
        
        setInterval(() => {
            if((betMoney.value != "" && /\d/g.test(betMoney.value)) && startGame){
                horsesMovement()
                reachFinish()
            }
        },time);
    }
// }






for(let i = 0; i< horses.length; i++){
    
    horses[i].addEventListener('click', (e) => {
        startGame = true;
        player = horses[i]
        startGame = true;

        update(player, i)
        })
}


function reachFinish(){
    for(key in competitors){
        if(competitors[key] >= field.clientWidth - 200){
            winner = +key
            resetHorses()
            award()              
        }
    }
}


function resetHorses(){
    for(key in competitors)  {
        competitors[key] = 0
        horses[key].style.left = competitors[key]
        horses[key].style.mixBlendMode = 'multiply'
    } 
}

function horsesMovement(){
    for(let i = 0; i < horses.length; i++){
        competitors[i] += Math.random() * 10
        horses[i].style.left = competitors[i] + 'px'        
    }
}

function award(){
    startGame = false  
    if(yourHorse == winner){
        awardText.innerText = 'Your Horse is the WINNNERRR'
        localStorage.money = +localStorage.money + (+betMoney.value * horses.length)
        money.innerText = `${localStorage.money}$`
        stadium.append(awardText)
        betMoney.value = ""
    } else {
        awardText.innerText = `Horse #${winner + 1} has won the Race`
        betMoney.value = ""
        stadium.append(awardText)
    }
}