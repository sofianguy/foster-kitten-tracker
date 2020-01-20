const kitten = (sequelize, DataTypes) => {
    const Kitten = sequelize.define('kitten', {
      kittenname: {
        type: DataTypes.STRING,
        unique: false,
      },
    });
    return Kitten;
  };
  export default kitten;