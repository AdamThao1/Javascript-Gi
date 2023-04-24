// Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
var userInput = prompt("hi, enter a message!");
var lowerCase = userInput.toLowerCase();
var upperCase = userInput.toUpperCase();

if (userInput === lowerCase) {
    console.log("You are Whispering");
    alert("You are whispering")
} 
else if(userInput === upperCase) {
    console.log("You are Shouting");
    alert("You are shouting!")

} 
else {
    console.log("You are normal");
    alert("You are normal")

}
