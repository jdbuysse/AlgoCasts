// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    
    //this guy suggests reversing the string and then comparing it
    //is the best solution
    //str.split('').reverse().join('') == str;

    // my solution (better on time or whatever but less readable)
    // let j = str.length - 1;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] != str[j]) {
    //         return false;
    //     }
    //     j--;
    // }
    // return true

    // less ideal solution?
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });

}

module.exports = palindrome;
