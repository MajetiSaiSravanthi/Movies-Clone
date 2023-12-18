const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
