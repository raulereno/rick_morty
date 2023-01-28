const { DataTypes } = require("sequelize");

const Episode = (sequelize) => {
  sequelize.define("Episode", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    air_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    episode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Episode;
