<<<<<<< HEAD


let fname = prompt('What is your first name?:');
let lname = prompt('What is your last name?:');
=======
const userName = prompt("What is your name ?: ");
const favColor = prompt("What is your favorite color: Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White, Grey ").toUpperCase();
const H1 = document.getElementById("msg");

console.log(favColor);

switch (favColor) {
  case 'RED':
>>>>>>> takehome-day3

console.log(`First name is: ${fname}`);
alert(`Your last name is ${lname}`);

<<<<<<< HEAD
let birthday = prompt('When is your birthday');

let verifyBirthdate = confirm('Is this the correct date?');
=======
    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);
 
    break;

  case 'ORANGE':
>>>>>>> takehome-day3

  alert(`Your Birthday is on ${birthday}`);

<<<<<<< HEAD

// THERE ARE NO IF'SSSS BELOW :D
// if (verifyBirthdate === 1 ){
//
//   let correctDate = new Date(birthday);
//
//   alert(`Your Birthday is on ${correctDate}`);
//
// } else {
//
//   alert(`YOU FOO!!! YOUR DATE IS MISSING`);
//
// }
=======
    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;

  case 'YELLOW':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;

  case 'GREEN':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;

  case 'BLUE':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;

  case 'PINK':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;

  case 'PURPLE':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;

  case 'BLACK':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;
  case 'WHITE':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;
  case 'GREY':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);

    break;


  default:
    console.log(`Sorry ${userName}, that is an invalid color`);

}
>>>>>>> takehome-day3
