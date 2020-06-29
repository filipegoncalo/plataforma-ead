
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('questions').del()
      .then(function () {
        // Inserts seed entries
        return knex('questions').insert([
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
  