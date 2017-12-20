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

    // myTodoDB.collection('Todos').find({
    //   _id:new ObjectID('5a39645f7547e11f34c69a6e')
    // }).toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //   console.log('Unable to fetch todos',err);
    // });

    // myTodoDB.collection('Todos').find().count().then((count)=>{
    //   console.log(`Todos Count: ${count}`);
    // },(err)=>{
    //   console.log('Unable to fetch todos',err);
    // });

    myTodoDB.collection('Users').find({name:'Anuradha'}).toArray().then((docs)=>{
      // console.log(`Todos Count: ${count}`);
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('Unable to fetch todos',err);
    });
    // database.close();
});