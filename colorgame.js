var numOfSquares = 6; 
var color = [];
var answerColor;

var squares = document.querySelectorAll(".square");
var answerDisplay = document.querySelector("#answerColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var stripe = document.querySelector("#stripe");
var body = document.querySelector("body");

init();

function init() {
	setUpModeButtons();
	setUpSquareListeners();
	reset();
}

function setUpModeButtons() {
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
		})
	}
}

function setUpSquareListeners(argument) {
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === answerColor){
				message.textContent = "Correct!";
				changeColor(answerColor);
				resetButton.textContent = "Play Again?"
				h1.style.backgroundColor = answerColor;
				body.style.backgroundColor = answerColor;
				stripe.style.backgroundColor = answerColor;

			}
			else{
				this.style.backgroundColor = "white";
				message.textContent = "Try Again";		
			}
		})
	}
}

function reset() {
	color = generateRandomColors(numOfSquares);
	answerColor = randColor();
	answerDisplay.textContent = answerColor;
	for(var i = 0; i < squares.length; i++){
		if(color[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "white";
	body.style.backgroundColor = "white";
	stripe.style.backgroundColor = "white";
	message.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColor(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = answerColor;
	}
}

function randColor() {
	var randomColor = Math.floor(Math.random() * color.length);
	return color[randomColor];
}

function generateRandomColors(number) {
	var array = [];
	for(var i = 0; i < number; i++){
		array.push(randRGB());
	}
	return array;
}

function randRGB() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
