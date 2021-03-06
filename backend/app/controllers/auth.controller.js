const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Compte=db.compte
const Role = db.role;
const Temp =db.temp;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user, compte } = require("../models");
exports.sign=(req, res) =>{
  //Top
  Temp.create({
    // username: req.body.username,
    //
    email: req.body.email
    // password: bcrypt.hashSync(req.body.password, 8)
  })

  .then(user => {
    // res.status(200).send({
    //   id: user.id,
    //   //2
    //   // username: user.username,
     
    //   email: user.email,
    
      
    // });
          res.send({ message: "User was registered successfully!" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        })
        
      
    } 

  


























exports.signup = (req, res) => {
  // Save User to Database 1
  User.create({
    //1
    // username: req.body.username,//
    
    prenom:req.body.prenom,
    nom:req.body.nom,
    exp:req.body.exp,
    
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
  
  .then(user => {
    if (req.body.roles) {
      Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles
          }
        }
      }).then(roles => {
        user.setRoles(roles).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      });
    } else {
      // user role = 1
      user.setRoles([1]).then(() => {
        res.send({ message: "User was registered successfully!" });
      });
    }
    Compte.create({
      numCarte:req.body.numCarte,
      dateExp:req.body.dateExp,
      cryptogramme:req.body.cryptogramme,
      userId:user.id
    })
  })

  .catch(err => {
    res.status(500).send({ message: err.message });
  });
 
    
};
// compte.create({
//   numCarte:req.body.numCarte,
//   dateExp:req.body.dateExp,
//   cryptogramme:req.body.cryptogramme
// })

exports.updateUser=(req,res,next) =>{
  User.update(
    { prenom:req.body.prenom,
      nom:req.body.nom,
      exp:req.body.exp,
     
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    },
      {where:{id:req.params.id}}
  )
  .then(()=>{res.status(200).json({message:"L'objet a ??t?? modifi??"}); Compte.update(
    {  numCarte:req.body.numCarte,
      dateExp:req.body.dateExp,
      cryptogramme:req.body.cryptogramme,
      
    },
      {where:{id:req.params.id}}
  )})
  .catch(error => res.status(400).json(error))
}

exports.updateCompte=(req,res,next) =>{
  Compte.update(
    {  numCarte:req.body.numCarte,
      dateExp:req.body.dateExp,
      cryptogramme:req.body.cryptogramme,
      
    },
      {where:{id:req.params.id}}
  )
  .then(()=>res.status(200).json({message:"L'objet a ??t?? modifi??"}))
  .catch(error => res.status(400).json(error))
}






exports.deleteUser=(req,res,next) =>{
  User.destroy(
    { 
      where:{id:req.params.id}

    },
  )
  .then(()=>res.status(200).json({message:"L'objet a ??t?? supprimer"}))
  .catch(error => res.status(400).json(error))
}
























exports.deleteTser=(req,res,next) =>{
  Temp.destroy(
    { 
      where:{id:req.params.id}

    },
  )
  .then(()=>res.status(200).json({message:"L'objet a ??t?? supprimer"}))
  .catch(error => res.status(400).json(error))
}















exports.signin = (req, res) => {
  User.findOne({
    where: {
      //first step
      email: req.body.email 
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          //2
          // username: user.username,
          prenom:user.prenom,
          nom:user.nom,
          exp:user.exp,
          numCarte:req.body.numCarte,
          dateExp:req.body.dateExp,
          cryptogramme:req.body.cryptogramme,
          email: user.email,
          password:req.body.password,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};