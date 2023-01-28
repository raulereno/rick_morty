const { DataTypes } = require("sequelize");

const Location = (sequelize) => {
  sequelize.define("Location", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
  });
};

module.exports = Location;
