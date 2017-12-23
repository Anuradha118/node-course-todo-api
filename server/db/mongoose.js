var mongoose=require('mongoose');


mongoose.Promise=global.Promise;
// console.log(process.env.MONGO)
// mongoose.connect('mongodb://anuradha:todo@ds163836.mlab.com:63836/todoapp');
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={mongoose};