
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('test').del()
      .then(function () {
        // Inserts seed entries
        return knex('test').insert([
          {
            teacher: 1,
            discipline_id:1,
            test_id: 1,
            description:"O que é função?",
            answer: 'a',
          },

        ]);
      });
  };
  