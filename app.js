console.log("Web Serverni boshlash!!!");
//(npm i express@4.18.2)
const express = require("express");
const app = express(); // expressning objecti app ga yuboriladi


// MongoDB connect
const db = require("./server").db();



// 1 Entry codes: Express ma'lumotiga bog'liq bo'lgan kodlar un;
app.use(express.static("public")); // har qanday brauzerdan kirib kelayotdan so'rovlar un public folderi ochiqligi;
app.use(express.json()); // kirib kelayotgan json holatdagi data ni object holatga o'girb beradi;
app.use(express.urlencoded({extended: true})); // HTML dan form request uchun express servis qabul qilib olishi un;

// 2 Session codes

// 3 Views codes: BSSR - Backenda front end yasash un(esj install qilib undan foydalanamiz);
app.set("views", "views"); // HTML (ESJ) file shu papkada 
app.set("view engine", "ejs"); //BSSR Backenda Frontend qurish

// 4 Routing codes: Routerlar un
// serverga path qilish un:

app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: yellow">Hello World by ALI!!!</h1>`);
});
// res.end - response javob tugashi
// res.send - response jo'natish va automatik tugatish



// app.get("/hello", function(req, res){
//     res.end(`<h1 style="background: yellow">Hello World by ALI!!!</h1>`);
//     // res.end - response javob tugashi
//     // res.send - response jo'natish va automatik tigatish
// });

// app.get("/gift", function(req, res){
//     res.send(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");  
  console.log(req.body);
  // res.end("succes");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    // if(err) {
    //   console.log(err);
    //   res.end("Something went wrong");           
    // } else {
    //   res.end("Succesfully edded");
    // }
    console.log(data.ops);    
    res.json(data.ops[0]);
  });

  // res.json({ test: "success" });
});

app.get("/", function(req, res){
  console.log("user entered /");  
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if(err) {
      console.log(err);
      res.end("Something went wrong");      
    } else {
      console.log(data);
      res.render("reja", { items: data });      
    }
  });  
});

module.exports = app;


/*
1) git init -- qilib (.gitignore) file ocamiz
2) node_modules
3) git status
4) git add .
5) git status
6) git commit -m "BRR: building express web server"
   (git commit --ammend) - oxirgi source birlashtirb yoz degandi, remote ga solib push qilingan bo'lsa bu commit shartmas 
7) git log --oneline
8) git branch
*) (git add server.js; git commit -m "Fix server.js configuration"; git status)
9) git remote - remote ni tekshirish
10) git branch -M master
11) git push origin master
12) git log --oneline (local mashina remote masterni ko'rish un)
13) git pull origin master (oxirgi source yuklab olish uchun)
*/ 

 