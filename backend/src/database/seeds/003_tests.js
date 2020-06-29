
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('test').del()
      .then(function () {
        // Inserts seed entries
        return knex('test').insert([
          {
            teacher: 1,
            discipline_id:1,
            name:"Função 1",
            type:"Prova",
            note: 10.0,
          },

        ]);
      });
  };
  