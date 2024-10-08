/**
 * 121. Best Time to Buy and Sell Stock (https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/) (Easy) 
 * 
 * Buy Low Sell High
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * 
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 */

var maxProfit = function(prices) {
    let n = prices.length;

    if (n === 0) {
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0

    for (let i = 0; i < n; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        let profit = prices[i] - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};

// using two pointers approach
var maxProfit = function(prices) {
    let n = prices.length;
    let maxProfit = 0;
    let left = 0;
    let right = 1;

    while (right < n) {
        if (prices[right] > prices[left]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }

        right++;
    }

    return maxProfit;
};

const prices = [7,1,5,3,6,4];
// const prices2 = [7,6,4,3,1];
console.log(maxProfit(prices));
