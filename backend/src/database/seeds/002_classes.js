
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
            name:"4° ano",
            schedule:"2020-06-10 09:00:00"
          },

        ]);
      });
  };
  