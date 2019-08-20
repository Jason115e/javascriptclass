const userName = prompt("What is your name ?: ");
const favColor = prompt("What is your favorite color: Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White, Grey ").toUpperCase();
const H1 = document.getElementById("msg");

console.log(favColor);

switch (favColor) {
  case 'RED':


    H1.innerHTML = (`${userName}, You Choosed the color ${favColor.toLowerCase()}`);
 
    break;

  case 'ORANGE':


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