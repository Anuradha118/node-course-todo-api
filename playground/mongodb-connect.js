// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , database)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const myTodoDB=database.db('TodoApp');

    // myTodoDB.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // myTodoDB.collection('Users').insertOne({
    //     name:'Anuradha',
    //     age:24,
    //     location:'Hyderabad'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert user',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    database.close();
});