let ran=Math.floor(Math.random()*100)
let chance=0
let guess
console.log(ran)
while(ran!=guess){
    chance++;
    guess=prompt("Enter your guess")
    if(guess==ran){

        alert("Your guess in "+chance+"chances")
        break
    }
    else if(guess<ran){
        alert("Your guess is less than number")
    }
    else{
        
        alert("Your guess is greater than the number")

    }
}
