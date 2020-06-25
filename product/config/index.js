module.exports = {
  MongoDB: {
    production: {
      path: 'mongodb://localhost',
      port: '27017',
      db: 'PMS',
    },
    development: {
      path: 'mongodb://localhost',
      port: '27017',
      db: 'PMS_dev',
    },
    test: {
      path: 'mongodb://localhost',
      port: '27017',
      db: 'PMS_test',
    },
    get URI() {
      const MongoDB_ENV = this[process.env.NODE_ENV];
      return `${MongoDB_ENV.path}:${MongoDB_ENV.port}/${MongoDB_ENV.db}`
    }
  },
  server: {
    PORT: 3001,
  }
};


