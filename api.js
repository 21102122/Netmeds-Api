let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
 const mongoUrl = "mongodb://localhost:27017"
// const mongoUrl = "mongodb+srv://netmeds:netmeds123@cluster0.x6wa1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const dotenv = require('dotenv')
dotenv.config()
let port = process.env.PORT || 8210;
var db;

//get
app.get('/',(req,res) => {
    res.send('Welcome to Express')
})


//products 
app.get('/product',(req,res) => {
    db.collection('product').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//medicines wrt product available
// app.get('/medicine/:id',(req,res) => {
//     let medId  = Number(req.params.id)
//     console.log(">>>>medId",medId)
//     db.collection('medicine').find({"id":medId}).toArray((err,result) =>{
//         if(err) throw err;
//         res.send(result)
//     })
// })

app.get('/medicine',(req,res) => {
    let netmedsId  = Number(req.query.id)
    let mhaelthcareId = Number(req.query.id)
    let query = {};
    if(netmedsId){
        query = {"mealTypes.mealtype_id":mealId,state_id:stateId}
    }
    else if(stateId){
        query = {state_id:stateId}
    }
    else if(mealId){
        query = {"mealTypes.mealtype_id":mealId}
    }
    console.log(">>>>restId",stateId)
    db.collection('restaurants').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongoUrl, (err,connection) => {
    if(err) console.log("Error While Connecting");
    db = connection.db('netmeds');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    });
})