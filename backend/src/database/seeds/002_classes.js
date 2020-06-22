
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('classes').del()
      .then(function () {
        // Inserts seed entries
        return knex('classes').insert([
          {
            teacher: 2,
            discipline_id:2,
            link:"url",
            name:"4 ano",
            schedule:"2020-06-10 22:51:54"
          },

        ]);
      });
  };
  