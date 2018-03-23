// When I click the "Set Color" button, it should change 
// the color of the "brush" box to the color I specify in the input field.
// Use jQuery to select the element and add an event listener

$("#set-color").on("click", function (event) {
	// select square and set its color equal to the input color
	// use val() to read the value of the input
	$(".brush").css("background-color", $("input").val());
	// to prevent page from refreshing automatically
	event.preventDefault();
})
