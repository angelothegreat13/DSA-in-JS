/**
 * 9. Palindrome Number (https://leetcode.com/problems/palindrome-number/description/) (Easy)
 * 
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

var isPalindrome = function(x) {
    let str = x.toString();
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return (reversedStr == x) ? true : false;
};

let x = 121;
let x2 = -121;
let x3 = 10;
console.log(isPalindrome(x));