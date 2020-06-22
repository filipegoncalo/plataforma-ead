
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('disciplines').del()
      .then(function () {
        // Inserts seed entries
        return knex('disciplines').insert([
          {
            teacher: 2,
            name:"C#",
            institution:"Unisanta",
            description:"refactor",
          },

        ]);
      });
  };
  