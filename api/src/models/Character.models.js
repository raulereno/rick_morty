const { DataTypes } = require("sequelize");

const Character = (sequelize) => {
  sequelize.define(
    "Character",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(["alive", "dead", "unknown"]),
        allowNull: false,
        defaultValue: "unknown",
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM(["female", "male", "genderless", "unknown"]),
        allowNull: false,
        defaultValue: "unknown",
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue:
          "https://www.lacosacine.com/wp-content/uploads/2023/01/Rick-Morty.png",
      },
      createInDB: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Character;
