import express from 'express';
import morgan from 'morgan';
import path from 'path';

const PORT = 3000;

const app = express();

app.use(morgan('dev'));

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, './src/ui/public'))); 

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './src/ui/index.html'))
);

app.post('/', (req, res) => {
  res.redirect('/success');
});

app.get('/success', (req, res) =>
  res.sendFile(path.join(__dirname, './src/ui/success.html'))
);

app.listen(PORT, () => {
  console.info(`🚀 Server running on port ${PORT}`);
});
