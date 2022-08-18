// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

const   Depart  = require('../models/depatment')

const getDepart= async (req,res)=>{

    const departList = await Depart.find() //.select('name phone email');
    if (!departList) {
        res.status(500).json({ success: false })
    }
    res.send(departList);
}

const postDepart = async(req,res)=>{
    let depart =  new Depart ({
        code : req.body.code,
        name : req.body.name
    }) 
   depart= await depart.save()
   if (!depart)
        return res.status(400).send('the depart cannot be created!')

    res.send(depart);

}
const updateDepart = async(req,res)=>{
    const depart = await Depart.findByIdAndUpdate(req.params.id,{
        code:req.body.code,
        name:req.body.name
    },{ new: true } //send the current data that updated
    )
    if (!depart) return res.status(404).send('the depart can not be updated');
    res.send(depart);

}
const deleteDepart =  (req,res)=>{
     Depart.findByIdAndDelete(req.params.id).then((depart)=>{
        if (depart){
            return res.status(200).send("depart delete")
        } else {
            return res.status(404).send("depart not found")
        }
     }).catch ((err)=>{
        res.status(500).json({success:false,error:err})

     })
}
module.exports = {
    deleteDepart,
    updateDepart,
    postDepart,
    getDepart
}