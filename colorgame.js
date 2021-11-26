 var numsquare = 6;
var colors = generateRandomColors(numsquare);
     var squares = document.querySelectorAll(".square");
     var pickedcolor = pickcolor();
     var colorDisplay = document.getElementById("colorDisplay");
     var messageDisplay = document.querySelector("#message");
      var h1 = document.querySelector("h1");
      var resetButton = document.querySelector("#reset");
      var modebutton = document.querySelectorAll(".mode");
      for (var i = 0; i < modebutton.length; i++) {
      	modebutton[i].addEventListener("click", function()
      	{
      		modebutton[0].classList.remove("selected");
      		modebutton[0].classList.remove("selected");
      		this.classList.add("selected");

      		if (this.textContent === "Easy") {
      			numsquare = 3;
      		}
      		else{
      			numsquare = 6;
      		}
      		reset();


      	});
      
      }
       
       function reset(){
       	colors = generateRandomColors(numsquare);
pickedcolor = pickcolor();
colorDisplay.textContent = pickedcolor;
resetButton.textContent ="New Colors";
messageDisplay.textContent = "";
for (var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
	}
	else{
		squares[i].style.display = "none";
	}
	
}

h1.style.backgroundColor = "steelblue";

       }

     
 resetButton.addEventListener("click", function() {

colors = generateRandomColors(numsquare);
pickedcolor = pickcolor();
colorDisplay.textContent = pickedcolor;
this.textContent ="New Colors";
messageDisplay.textContent = "";
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "steelblue";
})
	

 colorDisplay.textContent = pickedcolor;


     for (var i = 0; i < squares.length; i++) {
     	//add initial color to square
     	squares[i].style.backgroundColor = colors[i];
     

     	//add click listener to square

     	squares[i].addEventListener("click", function(){
     		//grab color of clicked square
     		var clickedcolor = this.style.backgroundColor;
     		console.log(clickedcolor,pickedcolor);
     		if(clickedcolor === pickedcolor) {
     			messageDisplay.textContent = "correct";
     			resetButton.textContent = "play again!";
     			changecolors(clickedcolor);
     			h1.style.backgroundColor = clickedcolor;
     		} else {
             this.style.backgroundColor = "#232323";
     		messageDisplay.textContent = "Try again";
     		}
     	})
     }
     	
     

     function  changecolors(color) {
     	//loop through all square
     	for (var i = 0; i < squares.length; i++) {
     		squares[i].style.backgroundColor = color;
     	}
     	//change each color to match qiven color

     	
     }
     function pickcolor() {
     	var random =  Math.floor(Math.random() *colors.length);
     return colors[random];
     }

     function generateRandomColors(num)
     {
     	//make an array
     	var arr = []
     	//add num random color to array
     	for (var i = 0; i < num; i++) {
     		arr.push(randomcolor());
    		//get random color and push in an array
     	}
     	//returnarray
     	return arr;
     }

     function randomcolor(){
     	//pick a red from255
     	var r = Math.floor(Math.random() * 256);
     	var b = Math.floor(Math.random() * 256);
     	var g = Math.floor(Math.random() * 256);
     	"rgb(r, g, b)"
     	return "rgb(" + r +", " + g + ", " + b +")";
     }