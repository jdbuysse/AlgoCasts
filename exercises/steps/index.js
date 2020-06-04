// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     // my solution
//     // let i = 0;
//     // let j = 0;
//     // let printx = ''
//     // while (i < n) {
//     //     j = 0;
//     //     while (j < n){
//     //         j <= i ? printx += '#' : printx += ' ';
//     //         j++;
//     //     }
//     //     console.log(printx);
//     //     printx = ''
//     //     i++;
//     // }
//     // return 0

//     // steve's version 
//     // for (let row=0; row < n; row++) {
//     //     let stair = ''
//     //     for (let column = 0; column < n; column++) {
//     //         column <= row ? stair += '#' : stair += ' ';
//     //     }
//     //     console.log(stair)
//     // }



// }

// steve's recursion version
function steps(n, row = 0, stair = '') {
    // start by defining your end case
    if (n === row) {
      return;
    }
  
    if (n === stair.length) {
      console.log(stair);
      return steps(n, row + 1);
    }
  
    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
  }
  
