// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // my solution
    // let sign = Math.sign(n);
    // n = Math.abs(n);
    // let rev = n.toString().split('').reverse().join('');
    // return parseInt(rev) * sign;

    //steve's solution
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
        
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
