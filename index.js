import express from 'express';

const app = express();
const PORT = 3000;

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '.' })
});

app.listen(PORT, () => {
  console.log(`Express server running at port ${PORT}`);
});
