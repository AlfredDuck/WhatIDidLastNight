/*
message
*/

var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var messagesSchema = new Schema({
   text: String,
   from: String,
   to: String,
   creat_time: Date,
   message_id: String
});

module.exports = mongodb.mongoose.model("messages", messagesSchema);