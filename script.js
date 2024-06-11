function firstWord(s) {
  // your code here
	let str=s.trim();
   let str1=str.split(" ");

	if (str.length>0) {
		return str1;
	}
	else() {
		return str;
	} 
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
