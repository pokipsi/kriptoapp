require('dotenv').config();
const request = require('request');

function Coins(){

    this.get = async function (symbol = 'BTC,ETH,XRP,USDT,EOS') {
        const apikey = process.env.API_KEY;
        const host = process.env.API_HOST;

        const endpoint = `${host}/v1/cryptocurrency/quotes/latest`;
        const uri = `${endpoint}?symbol=${symbol}`;
        return new Promise(function(resolve, reject){
            request({
                uri: uri,
                headers: {
                    'X-CMC_PRO_API_KEY': apikey
                }
            }, (error, response, body) => {
                if (error) {
                    resolve("error");
                } else {
                    if (response.statusCode == 200) {
                        resolve(body);
                    } else {
                        resolve(response);
                    }
                }
            });
        });
    }
}

module.exports = Coins;