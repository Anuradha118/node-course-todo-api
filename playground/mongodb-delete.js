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

    //deleteMany
    // myTodoDB.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    //   console.log(result);
    // })
    
    
    //deleteOne
    // myTodoDB.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //   console.log(result);      
    // });

    //findOneAndDelete
    // myTodoDB.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //   console.log(result);
    // });

    // myTodoDB.collection('Users').find({name:'Anuradha'}).count().then((count)=>{
    //   if(count>1){
    //     myTodoDB.collection('Users').deleteMany({name:'Anuradha'}).then((result)=>{
    //       console.log(result);
    //     })
    //   }
    // })

    // myTodoDB.collection('Users').deleteOne({name:'Anuradha'}).then((result)=>{
    //   console.log(result);
    // })

    myTodoDB.collection('Users').findOneAndDelete({_id:new ObjectID('5a39d6ee3bffa990aed52e4a')}).then((result)=>{
      console.log(JSON.stringify(result,undefined,2)); 
    })
    // database.close();
});