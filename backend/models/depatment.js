const mongoose = require('mongoose')

const DepartmentSchema= new mongoose.Schema({
    code: {
        type:Number,
        required:true
    },
    name: {
        type: String,
        required: true,
    },
})
DepartmentSchema.virtual('id').get(function() {
    return this._id.toHexString();
});
DepartmentSchema.set('toJSON', {
    virtuals: true,
});

module.exports=mongoose.model('Departement',DepartmentSchema)//'departements" name of collection in data base