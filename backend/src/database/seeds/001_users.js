
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          first_name: 'filipe', 
          last_name: 'Gonçalo',
          email: 'filipe@mail.com',
          password: '123456'
        }
      ]);
    });
};
