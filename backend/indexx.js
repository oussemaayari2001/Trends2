const express=require('express');
const bodyparser=require("body-parser");
const cors=require('cors');
const mysql=require('mysql2')




const app=express();
app.use(cors());
app.use(bodyparser.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'trends',
    password:'',
    port:3306

})
db.connect(err=>{
    if (err) {
        console.log((err,'dberr'));   
    }
    console.log('database connected');
})
//getdata
app.get('/user',(req,res)=>{
    
    let qr="select * from client"
    db.query(qr,(err,result)=>{
        if (err) {
            console.log(err,'errs');
        }
        if (result.length>0) {
            res.send({
                message:'all user data',
                data:result 
            })
            
        }
    });
   
})
//get Single Data
app.get('/user/:id',(req,res)=>{
    let id =req.params.id
  let qr=`select * from client where id = '${id}'`;
  db.query(qr,(err,result)=>{
      if(err){console.log(err);}
      if (result.length>0) {
          res.send({
              message:'get single data ',
              data:result,
          });

      }
      else {
          res.send({
              message:"data not found"
          })
      }
  })

})

//create data 
app.post('/user',(req,res)=>{
    console.log(req.body,'createdata');
    let mail=req.body.mail;
    let password=req.body.password
    let qr=`insert into client (mail,password) values( '${mail}','${password}' )`
db.query(qr,(err,result)=>{
    if (err) {
        console.log(err);
    }
    console.log(result,'result');
  
        res.send({
            message:'data  inserted', 
        })
      

})
})
//update data 
app.put('/user/:id',(req,res)=>{
    console.log(req.body,'updatedata');
    let id=req.params.id;
    let mail=req.body.mail;
    let password=req.body.password
    let qr=`update client set mail= '${mail}', password = '${password}' where id = ${id} `;
db.query(qr,(err,result)=>{
if(err) {console.log(err);}
res.send({
    message:'data updated'});
});
});
//delete data

app.delete('/user/:id',(req,res)=>{
    let id=req.params.id;
    let qr=`delete from client where id = ${id} `;
    db.query(qr,(err,result)=>{
        if(err) {console.log(err);}
        res.send({
            message:'data deleted'});
        });

})
app.listen(3000,()=>{console.log('server running');})