import Sequelize from 'sequelize';
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);
const models = {
  Kitten: sequelize.import('./kitten'),
//   TODO: make KittenInfo in kitten-info.js
//   KittenInfo: sequelize.import('./kitten-info'),
};
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
export { sequelize };
export default models;