// When I click the "Set Color" button, it should change 
// the color of the "brush" box to the color I specify in the input field.
// Use jQuery to select the element and add an event listener

// store color history to a variable
const colorHist = [];

$("#set-color").on("click", function (event) {
	// select brush and set its color equal to the input color
	// use val() to read the value of the input
	let brushColor = $(".brush").css("background-color", $("input").val());
	// to prevent page from refreshing automatically
	colorHist.push($("input").val());
	$("#swatch-1").css("background-color", colorHist[colorHist.length - 1]);
	$("#swatch-2").css("background-color", colorHist[colorHist.length - 2]);
	$("#swatch-3").css("background-color", colorHist[colorHist.length - 3]);
	event.preventDefault();
})

for (let i = 1; i <= 8000; i++){
	// create 20 divs
	// add .square class
	// append to body
	$("<div>").addClass("square").appendTo(".square-container");
}
$(".square").on("mouseover", function(event) {
	// get the brush's background-color, which is set by the swatches
	$(this).css("background-color", $(".brush").css("background-color"));
})

// create 3 color-swatches with unique IDs
for (let i = 1; i <= 3; i++){
	// create 3 color swatch boxes
	$("<div>").addClass("color-swatch").attr("id", "swatch-" + i).appendTo(".controls");
}

// add functionality to each color-swatch ID

$("#swatch-1").on("click", function(event) { 
	// change the brush color to the selected swatch
	$(".brush").css("background-color", colorHist[colorHist.length - 1]);
	event.preventDefault();
})
$("#swatch-2").on("click", function(event) { 
	// change the brush color to the selected swatch
	$(".brush").css("background-color", colorHist[colorHist.length - 2]);
	event.preventDefault();
})
$("#swatch-3").on("click", function(event) { 
	// change the brush color to the selected swatch
	$(".brush").css("background-color", colorHist[colorHist.length - 3]);
	event.preventDefault();
})


