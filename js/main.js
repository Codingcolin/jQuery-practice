// find a tag with an ID of test-button and when it's clicked, do this
$('#test-button').click(function() {
	// find and divs and add Hello World to it	
		$('div').append('Hello')
		// test this function
		console.log('Hey this function was fun!, Sweet!')
		//Hide id of goodbye tags
		$('#goodbye').fadeIn()
		//Show all more content tags
		$('#more-content').show()
		// Toggle between id super-element display state
		$('#super-element').toggle()



})
//When my document is fully loaded, do thi
$(document).ready(function() {
	//anytime my id of sweet-effects-button is clicked, do this

	$("#sweet-effects-button").click(function() {
		$('#sweet-effects-div').slideToggle(1000)
		//add a class of add-a-class to div tags
		$('div').toggleClass('add-a-class')

	})

$("#sweet-effects-button").dblclick(function() {
		$('#sweet-effects-div').prepared('This is my statements')

	})	
$('#sweet-effects-div').hover(function() {
	console.log('you hovered on this element, Sweet!!')
	})

})