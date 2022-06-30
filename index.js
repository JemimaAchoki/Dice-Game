// random dice 1
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceSrc = "images/dice" + randomNumber1 + ".png";

document.querySelector("img").setAttribute("src", randomDiceSrc);

// random dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSrc2);

// changing the h1 text

if(randomNumber1> randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩 Player 1 wins!"
}
else if (randomNumber2> randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
}
else {document.querySelector("h1").innerHTML = "It's a draw!"
};
