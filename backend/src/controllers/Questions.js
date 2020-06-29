const bcrypt = require('bcrypt');

const Questions = require('../models/Questions');

module.exports = {
  async index(request, response, next) {

    try {
      const results = await Questions.query();
      return response.json(results);

    } catch (error) {
      next(error);
    }

  },
}