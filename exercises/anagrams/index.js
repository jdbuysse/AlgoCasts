// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // my attempt....
    // const multiA = {};
    // const multiB = {};
    // stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    // stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
    // for (let char of stringA) {
    //     multiA[char] ?  multiA[char]++ : multiA[char] = 1
    // }
    // for (let char of stringB) {
    //     multiB[char] ?  multiB[char]++ : multiB[char] = 1
    // }
    // larger = Math.max(multiA.length, multiB.length);
    // smaller = Math.min(multiA.length, multiB.length);
    // for (const [key, value] of Object.entries(larger)) {
    //     if (!smaller.hasOwnProperty(key)) {return false}
    // }
    // return true

    //steve solution # 1
    // const aCharMap = buildCharMap(stringA);
    // const bCharMap = buildCharMap(stringB);
    // if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
    //     return false;
    // } 
    // for (let char in aCharMap) {
    //     if (aCharMap[char] != bCharMap[char]){
    //         return false;
    //     }
    // }
    // return true;

    //steve solution #2
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g).toLowerCase()) {
        charMap[char] ?  charMap[char]++ : charMap[char] = 1;
    }
    return charMap;
}

module.exports = anagrams;
