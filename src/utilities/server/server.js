const express = require('express');
const cors = require('cors');
const util = require('util');

const { handler } = require('../../index');

const app = express();
app.use(cors());
app.use(express.json());

const log_event_on_console = (req, res, next) => {
    const event = req.body;
    console.log('/////////////////////////////////////////////////////////////////////////////////////');
    console.log('%s', util.inspect(event, { showHidden: true, depth: null, colors: true }));
    console.table({
        flow: event.sessionState.sessionAttributes.flow || "No flow",
        intent: event.sessionState.intent.name,
        input: event.transcriptions[0].transcription
    });
    return next();
};

const log_response_on_console = (response) => {
    console.log('%s', util.inspect(response, { showHidden: true, depth: null, colors: true }));
    console.table({
        flow: response.sessionState.sessionAttributes.flow || "No flow"
    });
};

app.get('/', (req, res) => {
    console.log({ local_amazon_lex_backend: 'O servidor está online e atendendo requisições.' });
    res.status(200).send({ local_amazon_lex_backend: 'Server online' });
});

app.post('/', log_event_on_console, async (req, res) => {
    const response = await handler(req.body);
    log_response_on_console(response);
    res.status(200).send(response);
});

app.listen(3000, async () => {
    console.log({ local_amazon_lex_backend: 'Server online' });
});