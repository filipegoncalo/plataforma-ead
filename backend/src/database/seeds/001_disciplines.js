
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('disciplines').del()
      .then(function () {
        // Inserts seed entries
        return knex('disciplines').insert([
          {
            teacher: 1,
            name:"Matematica",
            institution:"Escola Estadual Dulce Maria",
            description:"A Matemática é a ciência que relaciona as práticas do cotidiano e a natureza ao raciocínio humano e à lógica numérica.",
          },

        ]);
      });
  };
  