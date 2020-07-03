const bcrypt = require('bcrypt');

const Answer = require('../models/Answer');

module.exports = {
  async index(request, response, next) {

    try {
      const results = await Answer.query();
      
      return response.json(results);

    } catch (error) {
      next(error);
    }

  },
}