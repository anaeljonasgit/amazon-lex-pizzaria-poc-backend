const ngrok = require('ngrok');

(async () => {
    const lambda_url = await ngrok.connect(3000);
    console.log({ lambda_url });
})();