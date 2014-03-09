function $(e) {
	return document.querySelector(e);
};
function roll() {
	return Math.ceil(Math.random() * 6);
}
window.addEventListener('load', function(){
	$('output[for=test]').value = $('input#test').value;
	$('input#test').addEventListener('input',function(){
		$('output[for=' + this.id + ']').value = this.value;
	});
	$('button').addEventListener('click',function(){
		alert('Hello, ' + $('#name').value)
	});
	$('#roll').addEventListener('click', function(){
		$('#die').dataset.rolled = roll();
	});
});
