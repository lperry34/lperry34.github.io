// sanity check
console.log("app.js linked.");

var login = {password: "taco"}

var passwordInput;

var loggedIn = false;

while (!loggedIn){
	passwordInput = prompt("Enter the password... hint: it is taco")
	if (passwordInput === login.password){
		console.log("Passwords match!");
    loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again!");
	}
}
