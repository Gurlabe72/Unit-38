var $ = require('jquery');

$(function(){
function afterRedButtonClicked(event){
    var bodyElement = $('body')
    // This changes the background-color of the body to red
    bodyElement.css('background-color', 'red');  
}
$('.red-button').click(afterRedButtonClicked);
function afterGreenButtonClicked(event){
    /* Fill in this listener */
    var bodyElement= $('body')
    bodyElement.css('background-color', 'green');
} 
$('.green-button').click(afterGreenButtonClicked);
function afterBlueButtonClicked(event){
    /* Fill in this listener */
    var bodyElement= $('body')
    bodyElement.css('background-color', 'blue');
} 
$('.blue-button').click(afterBlueButtonClicked);
function afterOrangeButtonClicked(event){
    /*  Fill in this listener */
    var bodyElement= $('body')
    bodyElement.css('background-color', 'orange');
  } 
$('.orange-button').click(afterOrangeButtonClicked);

})
