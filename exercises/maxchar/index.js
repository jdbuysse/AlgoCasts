// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const multi = {};
    for (let char of str) {
        multi[char] ? multi[char]++ : multi[char] = 1;
    }
    let hi = 0;
    let result = '';
    for (let [key, value] of Object.entries(multi)){
        if (value > hi) {
            hi = value;
            result = key;
        }
    }
    return result;
    
    // Steve's version of 2nd iteration
    // for (let char in multi) {
    //     if (multi[char] > hi) {
    //         hi = multi[char]
    //         result = char
    //     }
    // }
}

module.exports = maxChar;
