import mongoose from 'mongoose'
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name : {
    type : String,
    required: true
  },
  email : {
    type : String,
    required: true,
    unique : true
  },
  password : {
    type : String,
    required: true
  },
  isAdmin : {
    type : Boolean,
    required: true,
    default : false
  }
}, {
  timestamps : true
})

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  
  if (!this.isModified('password')) {
    // we are checking if the password has been modified or not. If it is not modified, then we don't want to execute
    // the codes below because it would create a new salt hash the present password and we won't be able to log in
    // This is necessary for update route, where user only modifies his name or email and not his password
    next()

  }

  const salt = await bcrypt.genSalt(10)

  this.password = await bcrypt.hash(this.password, salt)
  // this.password on the right is the unencrypted password which gets encrypted and overrides the initial unencrypted password (on the left side).

})

const User = mongoose.model('User', userSchema);

export default User;
