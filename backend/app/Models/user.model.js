module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      // username: {
      //   type: Sequelize.STRING
      // },
      prenom:{
        type:Sequelize.STRING
      },
      nom:{
        type:Sequelize.STRING
      },
      exp:{
        type:Sequelize.BOOLEAN,
        defaultValue: true
      },
      // numCarte:{
      //   type:Sequelize.INTEGER
      // },
      // dateExp:{
      //   type:Sequelize.DATEONLY 
      // },
      // cryptogramme:{
      //   type:Sequelize.INTEGER
      // },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };