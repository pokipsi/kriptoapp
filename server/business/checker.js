const Coins = require("./coins");
const Alerts = require("./alerts");

const compare = function(a, b, compareType){
    if (compareType == 'lt') return a < b;
    else return a > b;
}

const Checker = {
    check: async function(){

        const coinsDataAccessor = new Coins();
        const response = await coinsDataAccessor.get();

        const price = JSON.parse(response).data.BTC.quote.USD.price;

        const alertsDataAccessor = new Alerts();
        const alerts = await alertsDataAccessor.get();

        const display = [];

        alerts.forEach(alert => {
            if(alert.status && compare(price, alert.value, alert.type)){
                alert.status = false;
                alertsDataAccessor.update(alert);
                display.push(alert);
            }
        });

        return {
            all: alerts,
            display: display,
            currentPrice: price,
            coins: JSON.parse(response).data
        }

    },
}

module.exports = Checker