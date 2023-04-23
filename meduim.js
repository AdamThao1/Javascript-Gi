// Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
var userInput = ("hi, enter a message!");
var lowerCase = userInput.toLowerCase();
var upperCase = userInput.toUpperCase();

if (userInput === lowerCase) {
    console.log("Whisper");
} 
else if(userInput === upperCase) {
    console.log("Shout");
} 
else {
    console.log("normal");
}
