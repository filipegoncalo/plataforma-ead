
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'filipe',
          last_name: 'Gonçalo',
          email: 'filipe@mail.com',
          password: '123456',
          formation: "Professor",
          institution: "Escola estadual Dulce Maria"
        },
        {
          first_name: 'William',
          last_name: 'Cabral',
          email: 'william8cabral@gmail.com',
          password: '12345678',
          formation: "Professor",
          institution: "Lions Clube"
        }
      ]);
    });
};
