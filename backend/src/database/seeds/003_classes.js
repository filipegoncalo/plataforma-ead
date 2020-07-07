
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('classes').del()
      .then(function () {
        // Inserts seed entries
        return knex('classes').insert([
          {
            teacher: 1,
            discipline_id:1,
            link:"url do jitsi",
            name:"matematica",
            institution:"etec"
          },

        ]);
      });
  };
  