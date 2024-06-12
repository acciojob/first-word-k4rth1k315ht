function firstWord(s) {
  // your code here
	const str=s.trim();
   const str1=str.split(" ");

	return str1.length > 0 ? str1[0] : str;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
