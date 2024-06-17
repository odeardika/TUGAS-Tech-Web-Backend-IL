import express from 'express';
import 'dotenv/config';
import { router as notesRouter } from './routes/notes.js';

const app = express();
app.use(express.json());
app.use(notesRouter);
const port = process.env.APP_PORT || 3000;


app.get('/', (req, res) => {
  res.send('Your server is up and running!');
});

app.listen(port, () => {
  console.log(`[server] app listening at http://localhost:${port}`);
});
