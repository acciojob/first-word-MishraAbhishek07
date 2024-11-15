function firstWord(s) {
  // your code here
	let fw=s.trim().split(" ")
	return fw[0]
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
