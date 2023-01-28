const { DataTypes } = require("sequelize");

const Location = (sequelize) => {
  sequelize.define(
    "Location",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dimension: {
        type: DataTypes.STRING,
      },
    },
    {
      timestams: false,
    }
  );
};

module.exports = Location;
