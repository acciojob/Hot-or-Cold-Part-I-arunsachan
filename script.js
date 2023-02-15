//your code here
let btn= document.getElementById('btn');
let numPtag=document.getElementById('num');
let res=document.getElementById('respond');
let inputValue=document.getElementById('guess').value;

function randomNumberGenerator(){
   let randomNum=Math.floor(Math.random()*41)-20;
    numPtag.innerText=randomNum;
    guessNum();
    print();
}

function guessNum(){
    let input = Number(document.getElementById('guess').value);
}

function print(){
    if(Math .abs(randomNum - input) <= 5){
        document.getElementById('respond').innerText = 'Hot';
    }
    else{
        document.getElementById('respond').innerText = 'Cold';
    }
}

btn.addEventListener('click' , randomNumberGenerator);
