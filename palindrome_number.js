// https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function(x) {
    let str = x.toString();
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return (reversedStr == x) ? true : false;
};

let x = 121;
isPalindrome(x);
// console.log(isPalindrome(x));