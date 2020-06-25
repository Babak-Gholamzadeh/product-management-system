const express = require('express');
const morgan = require('morgan');
const expressMongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const { db } = require('./models');
const { PORT } = require('./config').server;
const routes = require('./routes');

const app = express();

// Parse the content of request body to json
app.use(express.json());
// Log the state of end points
app.use(morgan('dev'));
// Prevent NoSQL injection
app.use(expressMongoSanitize());
// Prevent XSS attacks
app.use(xssClean());
// Limit the rate of requests
app.use(rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 1000                 // 1000 requests
}));

app.use('/', routes);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  res.status(500).json({ success: false, data: 'Internal Server Error' });
  console.error('unhandledRejection:', err);
  process.exit(1);
});

db.connect
  .then(() => {
    console.log('DB is connected!')
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB error:', err)
  });
