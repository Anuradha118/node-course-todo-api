var env = process.env.NODE_ENV || 'development';
if(env==='development'||env==='test'){
    process.env.PORT=3000;
    process.env.MONGODB_URI='mongodb://localhost:27017/TodoApp';
}else if(env === 'production'){
    process.env.MONGODB_URI='mongodb://anuradha:todo@ds163836.mlab.com:63836/todoapp';
}

// module.exports={configs};