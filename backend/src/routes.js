const express = require('express');

const routes = express.Router();

routes.get('/',(request, response)=>{
  return response.json({
    user: 'alisonjs',
    message: 'Teste Nodemon'
  });
});

module.exports = routes;
