const bcrypt = require('bcrypt');

const User = require('../models/User');

module.exports = {
  async index(request, response, next) {

    try {
      const results = await User.query();
      return response.json(results);

    } catch (error) {
      next(error);
    }

  },

  async register(request, response, next) {
    const { first_name, last_name, email, password, formation, institution } = request.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      let user = await User.query().findOne({ email });

      if (user) {
        return response.status(404).json({ error: "User exist" });
      }
      if (!user) {
        user = await User.query().insert({
          first_name,
          last_name,
          email,
          password: hashedPassword,
          formation,
          institution
        });
        return response.status(201).json({ message: 'Successfully created' });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    const {
      first_name,
      last_name,
      formation,
      institution,
      genre,
      datebirth,
      document,
      photo,
      curriculum } = request.body;

    const { id } = request.params;

    //convert string to date
    const parts = datebirth.split("/");
    const dt = new Date(parts[2], parts[1] - 1, parts[0]);
    const updateAt = new Date();

    try {
      let user = await User.query().findById(id);

      if (!user) {
        return response.status(404).json({ error: "User doesn't exist" });
      }

      if (user.id == id) {
        user = await User.query().patch({
          first_name,
          last_name,
          formation,
          institution,
          genre,
          datebirth: dt,
          document,
          photo,
          curriculum,
          updated_at: updateAt
        }).where(id);

        return response.status(201).json({ message: 'Successfully updated' });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    const { id } = request.params;

    try {
      let user = await User.query().findById(id);

      if (!user) {
        return response.status(404).json({ error: "User doesn't exist" });
      }
      if (user.id == id) {

        user = await User.query().deleteById(id);

        return response.status(201).json({ message: 'Successfully deleted' });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error)
    }
  }
}