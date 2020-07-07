const bcrypt = require('bcrypt');
const { getMessage } = require('../helpers/messages');
const User = require('../models/User');

module.exports = {
  async show(request, response) {

      const results = await User.query();
      return response.json(results);

  },

  async update(request, response) {
    const { userId } = request;
    const { id } = request.params;
    const { body } = request;

    const fields = ['first_name', 'last_name', 'formation', 'institution',
      'genre', 'datebirth', 'document', 'photo', 'curriculum'];

    //if(userId !== id) return response.jsonUnauthorized(null);

    const user = await User.query().findById(id);

    if (!user) return response.jsonNotFound(null, 'Usuario não existe');

    fields.map((fieldName) => {
      const newValue = body[fieldName];
      if (newValue !== undefined) user[fieldName] = newValue;
    });
    
    const updatedUser = await User.query().update( user ).where({ id });
    return response.jsonSuccess(updatedUser);

  },

  async delete(request, response) {
    const { userId } = request;
    const { id } = request.params;

      const user = await User.query().findById(userId);

      if (!user) return response.jsonNotFound(null, 'Usuario não existe');

      if (user.level >= 1) {

        const deletedUser = await User.query().deleteById(id);

        return response.jsonSuccess(deletedUser);
      }

      return response.jsonUnauthorized(null);

  }
}