module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'ead',
      user: 'root',
      password: 'password'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
  }
};
