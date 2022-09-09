const mongoose=require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');


const Schema = mongoose.Schema; 

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
userSchema.plugin(uniqueValidator);

userSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});
module.exports=mongoose.model('User',userSchema)