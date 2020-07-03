const bcrypt = require('bcrypt');

const Alternatives = require('../models/Alternatives');

module.exports = {
  async index(request, response, next) {

    try {
      const results = await Alternatives.query();
      return response.json(results);

    } catch (error) {
      next(error);
    }

  },
}