const mongoose = require('mongoose');  

// 宣告一個 Schema 存到 UserSchema 裡面
const UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});

// 將這個 UserSchema 定義到一個叫做 User 的 model
mongoose.model('User', UserSchema);

// User model 只要用 mongoose.model() 將 model 讀出來，便可以對他進行操作了
module.exports = mongoose.model('User');