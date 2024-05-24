let btn = document.querySelectorAll(".btn");
let nbtn = document.querySelector(".newgame");
let msg = document.querySelector(".msg")
let msgcon = document.querySelector(".msgcon")
let rond = true;
let winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

btn.forEach((box) => {
    box.addEventListener("click", () =>{
        if(rond === true) {
        box.innerHTML = "o";
        rond = false;
    }else{
        box.innerHTML = "x";
        rond = true;
    } 
    box.disabled = true;
    showin();
     })
     
});

const newgame = () =>{
    rond = true;
    enable();
    msgcon.classList.add("hide")
    
}

const disable = () =>{
    for(let box of btn){
        box.disabled = true;
    }
}
const enable = () =>{
    for(let box of btn){
        box.disabled = false;
        box.innerHTML = ""
    }
}
const showwinner = (winner) =>{
    msg.innerHTML =`winner is ${winner}`
    msgcon.classList.remove("hide");
    disable();
}

const showin = () =>{
    for(patan of winner){
    
let pos0 = btn[patan[0]].innerHTML;
let pos1 = btn[patan[1]].innerHTML;
let pos2 = btn[patan[2]].innerHTML;
if(pos0 != "" && pos1 != "" && pos2 != ""){
    if(pos0 === pos1 && pos1 === pos2){
      showwinner(pos0);
      }
      }
    }
}

nbtn.addEventListener("click", newgame);