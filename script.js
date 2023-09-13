let horse = document.querySelector('.horse')
let stadium = document.querySelector('.stadium')
let field = document.querySelector('.race-field')

let winners =[]



let qunityty = 5;

for(let i = 0; i < qunityty; i++){
    let row = document.createElement('div')
    row.classList.add('row')
    let horse = document.createElement('div')
    horse.classList.add('horse')
    row.append(horse)
    field.append(row)
}

let horses = document.querySelectorAll('.horse')

let pos = 0;
let timer = 60

let movement = 1;

for(let i = 0; i < 70; i++){
    setTimeout(() => {
    pos += 1
            
    horseRun(pos)
}, i * timer)

}

function horseRun(pos){
    for(let i = 0; i < horses.length; i++){
        if(horses[i].style.left >= '90%'){
            horses[i].style.background = 'red'
            winners.push(i)
            return
        }
        let random = pos * (Math.random() * (Math.random() * 5))
        if(random < pos) {
            random = pos
        } else {
            continue
        }
        horses[i].style.left = pos + random  + '%'
   }
}


// function checkWin(){
//     for(let i = 0; i < horses.length; i++){
//         horses[i].textContent = i + 1
//         if(horses[i].offsetLeft >= 700){
//             horses[i].style.background = 'red'
//             console.log(i)
//             return true
//         }
//     }
// }

function checkWin(horse){
    if(horse.offsetLeft >= 700){
        horse.style.background = 'red'
        winners.push(horse)        
    }
}