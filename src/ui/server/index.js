import express from 'express';
import morgan from 'morgan';
import path from 'path';
import routes from './routes';

// declare the port. This would usually come from from environment variables.
const PORT = 3000;

const __dirname = path.resolve();

// declare an express app.
const app = express();

// tell the server to use simple logging via morgan NPM package.
app.use(morgan('dev'));

/**
 * Tell the server to use static assets (CSS etc) from a specific directory.
 * In this case, we have some simple, boilerplate CSS.
 */
app.use(express.static(path.join(__dirname, './src/ui/public')));

// tell the server to use our routes.
app.use('/', routes);

// tell the server to listen to PORT.
app.listen(PORT, () => {
  console.info(`🚀 Server running on port ${PORT}`);
});
