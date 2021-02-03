function greeting(){
	 var name = prompt('What is your name');
	 result = 'Hello' + ' ' + name;
	 console.log(result);
	 document.getElementById('xxxx').innerHTML = result;
}
greeting();