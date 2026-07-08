//counter program

const increment = document.getElementById("increment");
const Reset = document.getElementById("Reset");
const decrement= document.getElementById("decrement");
const container = document.getElementById("container");

let count=0;

increment.onclick=function(){
    count++;
    container.textContent=count;
}

decrement.onclick=function(){
    count--;
    container.textContent=count;
}

Reset.onclick=function(){
    count=0;
    container.textContent=count;
}