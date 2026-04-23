const express=require("express");
const app=express();
const port=8080;
const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"emp",
    password:"shalini"
});





app.listen(port,()=>{
    console.log("server is working");
})
app.get("/",(req,res)=>{
    res.send("server is working");
})

app.get("/user",(req,res)=>{
    let q=`SELECT * FROM emp`;
    connection.query(q,(err,result)=>{
        console.log(err);
        console.log(res);
        res.send("hii");
    })
})