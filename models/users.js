/*
user是注册用户，user通过手机号与一个shadow绑定在一起
*/
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var usersSchema = new Schema({
   cellphone: String,       //
   nickname: String,                //unsure
   password: String,                    //
   isSignup: Boolean,
   //解释一下，friend是存在于用户本机的，所以应该跟在user下
   //their cellphones & nicknames in my address book, like [15011236204, alfredduck]
   friends: Array,
   //{message_id:xxx, from_me:true}
   messages: Array,
   device: {
      ios_token: String
   }
});

module.exports = mongodb.mongoose.model("users", usersSchema);