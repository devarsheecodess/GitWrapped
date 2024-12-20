const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());  // For parsing application/json

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/github/webhook', (req, res) => {
  const payload = req.body; // The data sent by GitHub

  // Process the payload, e.g., log it
  console.log(payload);

  // Respond with a status to acknowledge receipt of the data
  res.status(200).send('Webhook received');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})