const bcrypt = require('bcrypt');

const Test = require('../models/Test');

module.exports = {
  async index(request, response, next) {
    try {
       // .join('test', '.id', '=', 'point_items.point_id')
      const results = await Test.query()
       // .join("classes",".id_classes","=","classes.id")
        //.join("classes",".id_classes","=","classes.id")
        //.join("classes",".id_classes","=","classes.id")
        ;
      return response.json(results);

    } catch (error) {
      next(error);
    }

  },
}