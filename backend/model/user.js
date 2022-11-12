var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	username: String,
	password: {
		type: String,
		minlength:8,
	}
}),
user = mongoose.model('user', userSchema);

module.exports = user;