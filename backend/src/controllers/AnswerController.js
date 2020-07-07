const bcrypt = require('bcrypt');

const Answer = require('../models/Answer');

module.exports = {
  async index(request, response) {

      const results = await Answer.query();
      
      return response.json(results);

  },
}