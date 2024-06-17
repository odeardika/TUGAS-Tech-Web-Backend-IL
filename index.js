import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Your server is up and running!');
});

app.listen(port, () => {
  console.log(`[server] app listening at http://localhost:${port}`);
});
