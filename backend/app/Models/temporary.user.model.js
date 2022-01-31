module.exports = (sequelize, Sequelize) => {
    const UserTemp = sequelize.define("userTemp", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return UserTemp;
  };