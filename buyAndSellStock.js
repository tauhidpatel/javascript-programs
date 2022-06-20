/* prices = [7,1,5,3,6,4]
               |     |
              buy  sell
              
 buyDay = 1
 buyPrice = prices[BuyDay]
 
 sellDay = 4
 sellPrice = prices[SellDay]

 buyDay < sellDay

 profit = sellPrice - buyPrice = 6-1 = 5

*/

var maxProfit = function(prices) {
    let minBuyPrice = prices[0];
    let max = 0;

    for(let i=1; i<prices.length; i++) {
        const sellPrice = prices[i];
        const profit = sellPrice - minBuyPrice;
        max = Math.max(max, profit);
        // when would be the best time
       // to buy given that we sell on day i
        minBuyPrice = Math.min(minBuyPrice, prices[i]);
    }
    return max;
};

const res = maxProfit([7,1,5,3,6,4]);
console.log(res);