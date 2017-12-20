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

    //findOneAndUpdate

    // myTodoDB.collection('Todos').findOneAndUpdate({
    //   _id:new ObjectID('5a39646dd90c611bb08741ee')
    // },{
    //   $set:{
    //     completed:true
    //   }
    // },{
    //   returnOriginal:false
    // }).then((result)=>{
    //   console.log(result);
    // })

    myTodoDB.collection('Users').findOneAndUpdate({
      name:'Arpita'
    },{
      $set:{
        name:'Anuradha'
      },
      $inc:{
        age:1
      }
    },{
      returnOriginal:false
    }).then((result)=>{
      console.log(result);
    })
    
    // database.close();
});