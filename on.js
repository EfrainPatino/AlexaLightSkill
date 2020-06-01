const https = require('http');
   
const onJson = JSON.stringify({
    status: 'ok',
    user: 'efrain',
    password: '123456',
    espID: 'secretID_1',
    state: true
});

const optionsOn = {
    hostname: '181.135.245.66',
    path: '/api/esp/turnon',
    port: 4500,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': onJson.length
    }
};

const postOn = https.request(optionsOn, (res) => {
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

postOn.write(onJson);
postOn.end();