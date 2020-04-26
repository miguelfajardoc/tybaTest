const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: String,
    password: {
	type: String,
	required: true
    },
    email: {
        type: String,
        required: true,
	unique: true,
	lowercase: true,
	trim: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

userSchema.statics.authenticate = async (email, password) => {
    const user = await User.findOne({ email: email });
    if (user) {
	if ( user.password === password ) {
	    return user;
	} else
	    return null;
    }
    return null;
}

let User = module.exports = mongoose.model('User', userSchema);

module.exports.get = (callback, limit) => {
    User.find(callback).limit(limit);
}
