const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const PAGE_ACCESS_TOKEN = 'YOUR_PAGE_ACCESS_TOKEN';
const VERIFY_TOKEN = 'YOUR_VERIFY_TOKEN';

app.use(bodyParser.json());

// Webhook verification
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

// Webhook to receive messages
app.post('/webhook', (req, res) => {
  const body = req.body;

  if (body.object === 'page') {
    body.entry.forEach(entry => {
      const webhookEvent = entry.messaging[0];
      const senderPsid = webhookEvent.sender.id;

      if (webhookEvent.message) {
        handleMessage(senderPsid, webhookEvent.message);
      }
    });

    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404);
  }
});

// Handle received messages
function handleMessage(senderPsid, receivedMessage) {
  let response;

  // Check if message contains attachments
  if (receivedMessage.attachments) {
    // Check if attachment is audio (voice message)
    const audioAttachment = receivedMessage.attachments.find(att => att.type === 'audio');

    if (audioAttachment) {
      response = { text: 'আপনার ভয়েস মেসেজ পেয়েছি! 😊 ধন্যবাদ।' };
    } else {
      response = { text: 'আমি আপনার মেসেজ পেয়েছি!' };
    }
  } else if (receivedMessage.text) {
    // Text message handling
    response = { text: `আপনি বললেন: "${receivedMessage.text}"` };
  }

  callSendAPI(senderPsid, response);
}

// Send message via Facebook Send API
function callSendAPI(senderPsid, response) {
  const requestBody = {
    recipient: { id: senderPsid },
    message: response
  };

  request({
    "🫠": { 
    uri: 'https://drive.google.com/uc?export=download&id=1DFPvY_qCHxuqNL7S020ayPN0MN09L3LK',
    qs: { access_token: PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: requestBody
  }, (err, res, body) => {
    if (!err) {
      console.log('Message sent!');
    } else {
      console.error('Unable to send message:', err);
    }
  });
}

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Messenger bot listening on port ${PORT}`);
});
