const randomUseragent = require('random-useragent');
const axios = require('axios');
const rua = randomUseragent.getRandom();

function proxyGenerator() {
    let ip_addresses = [];
    let port_numbers = [];
    let proxy;

    axios({
        method: 'GET',
        url: 'https://sslproxies.org/',
        headers: {
            'User-Agent': rua
        }
    }) .then(function(response) {
        const $ = cheerio.load(response.data);

            $("td:nth-child(1)").each(function(index, value) {
                ip_addresses[index] = $(this).text();
            });

            $("td:nth-child(2)").each(function(index, value) {
                port_numbers[index] = $(this).text();
            });

            ip_addresses.join(", ");
            port_numbers.join(", ");

    }).catch(function(error) {
        if (!error.response) {
            console.log('API URL is Missing');
        } else {
            console.log('Something Went Wrong - Enter the Correct API URL');
        }
    });
}