var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

//for dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

//changing h1
var title = document.querySelector("h1");
if(randomNumber1>randomNumber2){
    title.innerText="Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    title.innerText="Player 2 wins!";
}
else{
    title.innerText="Draw!";
}


