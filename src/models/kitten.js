const kitten = (sequelize, DataTypes) => {
    const Kitten = sequelize.define('kitten', {
      kittenid: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: false,
      },
      photo: {
        type: DataTypes.STRING,
        unique: true
      }
    });
    return Kitten;
  };
  export default kitten;