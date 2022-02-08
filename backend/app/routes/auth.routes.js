const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const db = require("../Models");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin,Content-Type:application/json,Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup,
  );
  app.post("/api/auth/signin", controller.signin);
  app.put("/api/auth/:id",controller.updateUser)
 
  app.post(
    "/api/auth/sign"
    ,
    [
      verifySignUp.checkDuplicate,
      
    ],
   
    controller.sign
  );

  
};