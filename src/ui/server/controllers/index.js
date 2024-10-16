import path from 'path';

const __dirname = path.resolve();

export const get = (req, res) =>
  res.sendFile(path.join(__dirname, './src/ui/templates/index.html'));

export const post = (req, res) => res.redirect('/success');
