import { get, post, put, remove } from './api.js';

// Usage example
get('https://api.example.com/data')
  .then(response => {
    console.log('GET response:', response);
    // Process the response data
  })
  .catch(error => {
    console.error('GET request error:', error);
    // Handle the error
  });

  const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/movies', movieRoutes);
app.use('/users', userRoutes);
