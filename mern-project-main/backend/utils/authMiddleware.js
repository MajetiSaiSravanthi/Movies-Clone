const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Check if the request contains an authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  try {
    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, 'your-secret-key');
    req.user = decodedToken.user;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
