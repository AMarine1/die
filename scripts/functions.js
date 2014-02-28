function $(e) {
	return document.querySelector(e);
};
window.addEventListener('load', function(){
	$('output[for=test]').value = $('input#test').value;
	$('input#test').addEventListener('input',function(){
		$('output[for=' + this.id + ']').value = this.value;
	});
	$('button').addEventListener('click',function(){
		alert('Hello, ' + $('#name').value)
	});
});
