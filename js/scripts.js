$(document).ready(function(){
console.log('jQuery loaded');
$('#start').on('click', function() {
$('.page-header').hide();
$('#hidden').show();
});
});

var x = 'Hello world';

console.log('x: ', x); 

alert('Hi! This is not a bug or scam, just welcoming you :)');

if( 1 > 2 ) {
document.getElementById('box-1').style.display = "none";
}
