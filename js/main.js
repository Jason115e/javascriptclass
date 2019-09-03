const userInputDegree = document.querySelector('#degreeInput');
const userDegreeOutput = document.getElementById("degreeOutput");
const errorMessage = document.getElementById("errormessage");
const buttonSelect = document.querySelectorAll('button');
const buttons = document.querySelectorAll(".select");
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        checkInputField();
    });
};

function checkInputField() {
    let newFormatInput = isNaN(userInputDegree.value);
    if (newFormatInput == false && !userInputDegree.value == "") {
        userInputDegree.value = "";
        userDegreeOutput.value = "";
        startRace();
    } else {
        userDegreeOutput.value = "Nope, not going to try and converting this.";
        userInputDegree.value = "";
    }
}

function startRace() {


    if (this.selectionFahrenheit == ){
        console.log("fah");


    }




}