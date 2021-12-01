//get the value/string from page
//Controller Funtion

function getValues() {

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}
//Confirm it is a string




//Logic Function
//Reverse the String
function reverseString(userString) {
    let revString = [];

   

    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }

    return revString;
}

//Viewer Function
//Display the reversed string to the user
function displayString(revString){

    //write to the page 
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`

    //Show the alert box

    document.getElementById("alert").classList.remove("invisible");
}