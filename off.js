const https = require('http');
   
const offJson = JSON.stringify({
    status: 'ok',
    user: 'efrain',
    password: '123456',
    espID: 'secretID_1',
    state: false
});

const optionsOff = {
    hostname: '181.135.245.66',
    path: '/api/esp/turnoff',
    port: 4500,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': offJson.length
    }
};


const postOff = https.request(optionsOff, (res) => {
    let data = '';
    //console.log('Status Code:', res.statusCode);
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('Body: ', JSON.parse(data));
    });
}).on("error", (err) => {
    console.log("Error: ", err.message);
});

postOff.write(offJson);
postOff.end();