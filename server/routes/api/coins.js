require('dotenv').config();
const express = require('express');
const request = require('request');

const router = express.Router();

// GET

router.get('/', (req, res) => {

    const apikey = process.env.API_KEY;
    const host = process.env.API_HOST;

    const endpoint = `${host}/v1/cryptocurrency/quotes/latest`;
    const symbol = 'BTC,ETH,XRP,USDT,EOS';
    const uri = `${endpoint}?symbol=${symbol}`;
    request(
        {
            uri: uri,
            headers: {
                'X-CMC_PRO_API_KEY': apikey
    
            }
        }, (error, response, body) => {
        if(error){
            res.send("error");
        }else{
            if (response.statusCode == 200) {
                res.send(body);
            } else {
                res.send(response);
            }
        }
    });


    // res.send(`
    //     {
    //         "status": {
    //             "timestamp": "2020-01-06T13:08:12.278Z",
    //             "error_code": 0,
    //             "error_message": null,
    //             "elapsed": 8,
    //             "credit_count": 1
    //         },
    //         "data": {
    //             "BTC": {
    //                 "id": 1,
    //                 "name": "Bitcoin",
    //                 "symbol": "BTC",
    //                 "slug": "bitcoin",
    //                 "num_market_pairs": 7919,
    //                 "date_added": "2013-04-28T00:00:00.000Z",
    //                 "tags": [
    //                     "mineable"
    //                 ],
    //                 "max_supply": 21000000,
    //                 "circulating_supply": 17906012,
    //                 "total_supply": 17906012,
    //                 "platform": null,
    //                 "cmc_rank": 1,
    //                 "last_updated": "2019-08-30T18:51:28.000Z",
    //                 "quote": {
    //                     "USD": {
    //                         "price": 9558.55163723,
    //                         "volume_24h": 13728947008.2722,
    //                         "percent_change_1h": -0.127291,
    //                         "percent_change_24h": 0.328918,
    //                         "percent_change_7d": -8.00576,
    //                         "market_cap": 171155540318.86005,
    //                         "last_updated": "2019-08-30T18:51:28.000Z"
    //                     }
    //                 }
    //             },
    //             "EOS": {
    //                 "id": 1765,
    //                 "name": "EOS",
    //                 "symbol": "EOS",
    //                 "slug": "eos",
    //                 "num_market_pairs": 338,
    //                 "date_added": "2017-07-01T00:00:00.000Z",
    //                 "tags": [],
    //                 "max_supply": null,
    //                 "circulating_supply": 929651261.8605,
    //                 "total_supply": 1026351273.1073,
    //                 "platform": null,
    //                 "cmc_rank": 7,
    //                 "last_updated": "2019-08-30T18:51:06.000Z",
    //                 "quote": {
    //                     "USD": {
    //                         "price": 3.2153156971,
    //                         "volume_24h": 1218663889.6758,
    //                         "percent_change_1h": -0.124671,
    //                         "percent_change_24h": -0.57441,
    //                         "percent_change_7d": -12.8349,
    //                         "market_cap": 2989122295.088888,
    //                         "last_updated": "2019-08-30T18:51:06.000Z"
    //                     }
    //                 }
    //             },
    //             "ETH": {
    //                 "id": 1027,
    //                 "name": "Ethereum",
    //                 "symbol": "ETH",
    //                 "slug": "ethereum",
    //                 "num_market_pairs": 5629,
    //                 "date_added": "2015-08-07T00:00:00.000Z",
    //                 "tags": [
    //                     "mineable"
    //                 ],
    //                 "max_supply": null,
    //                 "circulating_supply": 107537936.374,
    //                 "total_supply": 107537936.374,
    //                 "platform": null,
    //                 "cmc_rank": 2,
    //                 "last_updated": "2019-08-30T18:51:21.000Z",
    //                 "quote": {
    //                     "USD": {
    //                         "price": 168.688633539,
    //                         "volume_24h": 5774323846.44399,
    //                         "percent_change_1h": -0.0330049,
    //                         "percent_change_24h": -0.510765,
    //                         "percent_change_7d": -13.1883,
    //                         "market_cap": 18140427540.533985,
    //                         "last_updated": "2019-08-30T18:51:21.000Z"
    //                     }
    //                 }
    //             },
    //             "USDT": {
    //                 "id": 825,
    //                 "name": "Tether",
    //                 "symbol": "USDT",
    //                 "slug": "tether",
    //                 "num_market_pairs": 3016,
    //                 "date_added": "2015-02-25T00:00:00.000Z",
    //                 "tags": [],
    //                 "max_supply": null,
    //                 "circulating_supply": 4008269411.01333,
    //                 "total_supply": 4095057493.36343,
    //                 "platform": {
    //                     "id": 83,
    //                     "name": "Omni",
    //                     "symbol": "OMNI",
    //                     "slug": "omni",
    //                     "token_address": "31"
    //                 },
    //                 "cmc_rank": 6,
    //                 "last_updated": "2019-08-30T18:51:12.000Z",
    //                 "quote": {
    //                     "USD": {
    //                         "price": 1.00308254852,
    //                         "volume_24h": 15955380784.3482,
    //                         "percent_change_1h": 0.0135326,
    //                         "percent_change_24h": 0.166516,
    //                         "percent_change_7d": -0.0104562,
    //                         "market_cap": 4020625095.95401,
    //                         "last_updated": "2019-08-30T18:51:12.000Z"
    //                     }
    //                 }
    //             },
    //             "XRP": {
    //                 "id": 52,
    //                 "name": "XRP",
    //                 "symbol": "XRP",
    //                 "slug": "ripple",
    //                 "num_market_pairs": 449,
    //                 "date_added": "2013-08-04T00:00:00.000Z",
    //                 "tags": [],
    //                 "max_supply": 100000000000,
    //                 "circulating_supply": 42932866967,
    //                 "total_supply": 99991366793,
    //                 "platform": null,
    //                 "cmc_rank": 3,
    //                 "last_updated": "2019-08-30T18:51:03.000Z",
    //                 "quote": {
    //                     "USD": {
    //                         "price": 0.254448519152,
    //                         "volume_24h": 926785215.623047,
    //                         "percent_change_1h": -0.187121,
    //                         "percent_change_24h": -1.85857,
    //                         "percent_change_7d": -7.81634,
    //                         "market_cap": 10924204422.702969,
    //                         "last_updated": "2019-08-30T18:51:03.000Z"
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

});

module.exports = router;