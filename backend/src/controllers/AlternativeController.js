const bcrypt = require('bcrypt');

const Alternatives = require('../models/Alternatives');

module.exports = {
  async index(request, response) {

      const results = await Alternatives.query();
      return response.json(results);

  },
}