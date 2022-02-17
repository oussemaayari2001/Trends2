module.exports = (sequelize, Sequelize) => {
    const Compte = sequelize.define("compte", {
      // username: {
      //   type: Sequelize.STRING
      // },
      
      numCarte:{
        type:Sequelize.INTEGER
      },
      dateExp:{
        type:Sequelize.DATEONLY 
      },
      cryptogramme:{
        type:Sequelize.INTEGER
      }
    });
  
    return Compte;
  };