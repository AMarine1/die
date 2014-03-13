function $(e) {
	return document.querySelector(e);
};
function roll() {
	return Math.ceil(Math.random() * 6);
}
window.addEventListener('load', function(){
	$('#die').src = 'images/557px-Dice-' + roll() + '.png';
	$('output[for=test]').value = $('input#test').value;
	$('input#test').addEventListener('input',function(){
		$('output[for=' + this.id + ']').value = this.value;
	});
	$('button').addEventListener('click',function(){
		alert('Hello, ' + $('#name').value)
	});
	$('#die').addEventListener('click', function(){
		this.src = 'images/557px-Dice-' + roll() + '.png';
	});
});
