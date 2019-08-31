const userInputDegree = document.getElementById("degreeInput");
const userDegreeOutput = document.getElementById("degreeOutput");
const buttonFahrenheit = document.getElementById("selectionFahrenheit");
const buttonCelcius = document.getElementById("selectionCelcius");
const errorMessage = document.getElementById('errormessage');



buttonFahrenheit.addEventListener('click', () => {
    let numberisNumber = isNaN(userInputDegree.value);
    if (!numberisNumber) {
        console.log("is a number");
        userDegreeOutput.value = `Celcius: ${parseFloat((userInputDegree.value - 32) * 5/9).toFixed(2)} `;
        errorMessage.innerHTML = "";
    } else {
        console.log("Is not a number");
        errorMessage.innerHTML = "Please enter an actual number!";
    }
});
buttonCelcius.addEventListener('click', () => {
    let numberisNumber = isNaN(userInputDegree.value);
    if (!numberisNumber) {
        console.log("is a number");
        userDegreeOutput.value = `Fahrenheit: ${parseFloat((userInputDegree.value * 9/5) + 32).toFixed(2)} `;
        errorMessage.innerHTML = "";
    } else {
        console.log("Is not a number");
        errorMessage.innerHTML = "Please enter an actual number!";
    }
});

