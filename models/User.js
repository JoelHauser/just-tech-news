const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class User extends Model {}

User.init(
  {
    //table column def go here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    //table config options go here
    //pass in our imported sequelize connection
    sequelize,
    //dont automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    //dont pluralize name of db table
    freezeTableName: true,
    //use underscores instead of camelCaSe
    underscored: true,
    //make it so model name stays lowercase
    modelName: "user",
  }
);

module.exports = User;
