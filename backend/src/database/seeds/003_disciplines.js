
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('test').del()
      .then(function () {
        // Inserts seed entries
        return knex('test').insert([
          {
            name:"p1",
            name:"4 ano",
            id_type:"1",
            id_classes:1
          },

        ]);
      });
  };
  