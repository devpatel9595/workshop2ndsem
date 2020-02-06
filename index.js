var express = require("express");
var app = express();
var fs = require("fs");
app.use(express.static("root"));

let data =fs.readFileSync("./posts.json");
let json =JSON.parse(data)
console.log(json);
app.use(express.json());
//get method api
app.get("/post",(req,res)=>{
	json.push({"title":"abhishek","desc":"patel"})
res.send(json);
//res.send(req.params)
//res.send(req.query);
})

//post mathod api
app.post("/post",(req,res)=>{
	res.send(req.body);
	//json.push({"title":"dev","desc":"patel"})
//fs.writeFileSync("./post.json",JSON.stringify(json,null,2))
})
app.listen(3000,()=>{console.log("listening on port 3000")});