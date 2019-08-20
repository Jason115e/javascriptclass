// // const exampleString = "I am another String";
// // const exampleObjectString = new String (1);
// // const anotherString = "I am another String"


const H1 = document.getElementById('greeting');


// // function checkExamples() {


// // // if (exampleString == exampleObjectString) {

// // // console.log(`yes, ${exampleString} and ${exampleObjectString} do loosly goose`)
// // // } else {


// //   if (exampleString != anotherString) {

// //     console.log(`yes, ${exampleString} and ${anotherString} do loosly goose`)
// //     } else {


// // console.log('Sorry, they dont equal at all ')

// // }

// // }

// // // checkExamples();

// // const luckyNumber = 3;

// // if (luckyNumber < 5 || luckyNumber > 1){
// // console.log('Yes, betweeen ');

// // }else {
// //   console.log('No');


// // }

// const stringOne = "I am a string";
// const objectStringOne = new String ("I am a string");

// if(stringOne == objectStringOne){
// console.log('They are loose equal');

// }else {
//   console.log('They are not loose equal');

// }


// const stringTwo = "I am a string";
// const objectStringTwo = new String ("I am a string");

// if(stringTwo === objectStringTwo){
// console.log('They are strict');

// }else {
//   console.log('They are not strict');

// }



// // let b = 2;


// let a = 10;

// let result = 0;



// console.log(result +=a);

// let hello = "Hello ";
// let there = "There!"


// let testNan = isNaN('Hello');
// console.log(testNan);

// let vaNan = "I am indeed Nan";

// let testNan = isNaN(vaNan);

//switch statements

const askColor = prompt("Pick a color:  Red, Blue, Orange").toUpperCase();
console.log (askColor);

switch (askColor) {
  case 'RED':
    console.log("The color is Red");
    H1.innerHTML = "You choosed color red";
    break;

  case 'BLUE':
    console.log("The color is Blue");
    H1.innerHTML = "You choosed color Blue";
    break;

  case 'ORANGE':
    console.log("The color is Orange");
    H1.innerHTML = "You choosed color Orange";
    break;

  default:
      H1.innerHTML = "Sorry, your selection is not here";
    console.log("None are here");

}