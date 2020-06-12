
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          first_name: 'William', 
          last_name: 'Cabral',
          genre:"M",
          datebirth:"1996-08-08",
          document:"458918660",
          formation:"Bacharel",
          curriculum:"",
          email: 'william8cabral@gmail.com',
          password: '123456',
          photo:"url aqui",
          score:1,
          profile:0
        }
      ]);
    });
};
