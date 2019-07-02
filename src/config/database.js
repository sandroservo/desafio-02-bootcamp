module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'docker',
  database: 'meetapp',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};
