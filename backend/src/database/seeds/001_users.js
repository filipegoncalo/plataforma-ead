
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'João',
          last_name: 'Santos',
          email: 'joao@email.com',
          password: '123456',
          formation: "Professor",
          institution: "Escola Estadual Dulce Maria",
          genre: "Masculino",
          document: 987654321,
          photo: "https://avatars3.githubusercontent.com/u/31941580?s=400&u=c9c2f62c62dcf5c5db67d92fd31184533f2bceb2&v=4",
          curriculum: "https://br.linkedin.com/joao",
        },
      ]);
    });
};
