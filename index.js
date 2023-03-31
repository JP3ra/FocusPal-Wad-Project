//importing the module 
const express=require("express");

//creates a server 
const app = express();

app.use('/static',express.static('static'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/static/index.html')
});

app.get("/todolist", (req, res)=>{
    res.sendFile(__dirname + '/static/todolist.html');
});

app.get("/expenses", (req, res)=>{
    res.sendFile(__dirname + '/static/expense.html');
});


app.get("/sgpa", (req, res)=>{
    res.sendFile(__dirname + '/static/gpa.html');
});


app.get("/notes", (req, res)=>{
    res.sendFile(__dirname + '/static/notes.html');
});

app.get("/signup", (req, res)=>{
    res.sendFile(__dirname + '/static/signup.html');
});










app.listen(3000, 'localhost', ()=>{
    console.log("Server is running on port 3000");
});
