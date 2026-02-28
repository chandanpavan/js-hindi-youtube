// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("default case match");

    break;
}

// if we dont write break then once the case gets matched it will print all the below codes except default one without checking
// try by commenting the case 3 break
