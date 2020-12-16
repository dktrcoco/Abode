const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

    username: { type: String, unique: false, required: false },
    password: { type: String, unique: false, required: false }

})

// defining schema methods
userSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// defining hooks for pre-savings
userSchema.pre('save', function(next) {
    if (!this.password) {
        console.log('models/user.js: NO PASSWORD PROVIDED')
        next()
    } else {
        console.log('models/user.js: hasPassword in pre-save');

        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User