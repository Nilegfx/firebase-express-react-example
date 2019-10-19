const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:5001/firebase-express-react-example/us-central1/main',
      changeOrigin: true,
    })
  );
};