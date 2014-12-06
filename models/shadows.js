/*
shadow是注册用户的影子，但其实shadow才是真正存在的人，shadow是基于手机号的，user通过手机号与一个shadow绑定在一起。
shadow无需通过注册产生，而是通过获得注册用户的通讯录自动建立。
*/
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var shadowsSchema = new Schema({
   mail: String,
   cellphone: String,
   be_liked: Number,
   be_hated: Number
});

module.exports = mongodb.mongoose.model("shadows", shadowsSchema);