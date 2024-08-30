const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum-minNum+1))+minNum;

let guess ;
let running = true;
let attempts= 0;

while(running){
    guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Invalid ! you must enter a number");
    }
    else if (guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    
    }
    else{
        attempts++;

    if(guess < answer){
        window.alert("TOO LOW ! TRY AGAIN");
    }
    else if ( guess > answer){
        window.alert("TOO HIGH ! TRY AGAIN");

    }
    else{
        window.alert(`CORRECT  IT TOOK YOU ${attempts} attempts to find it `);
        running = false ;
    }
}
}