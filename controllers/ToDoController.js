const  ToDoModel = require('../models/ToDoModel');

module.exports.getAllToDo = async(req, res)=>{
    try{
        const toDo = await ToDoModel.find();
        res.json(toDo);
        // res.send(toDo);
    }catch(err){
        console.log('ERROR:', err);
        res.status(500).json({error:"database is empty!"});
    }
}
module.exports.getToDo = async(req, res)=>{
    const {_id} = req.body;
    try{
        const toDo = await ToDoModel.findById(_id);
        res.json(toDo);
        // res.send(toDo);
    }catch(err){
        console.log('ERROR:', err);
        res.status(500).json({error:"database is empty!"});
    }
}


module.exports.createToDo =  async(req, res)=>{
    const { text }  = req.body;
    try{
    const newToDo = await ToDoModel.create({text});
    console.log("newToDo:", newToDo);
    res.status(201).json(newToDo);
    }catch(err){
        console.error('Error:', err);
        res.status(500).json({error:"internal server error"});
    }
}
    
    module.exports.updateToDo =  async(req, res)=>{
        const {_id, text}  = req.body;
        try{
            const updateToDo = await ToDoModel.findByIdAndUpdate(_id, {text});
            console.log('Todo updated:',updateToDo);
            res.json(updateToDo);
        }catch(err){
            console.error('Error updating todo:', err);
            res.status(500).json({error:"todo is not updated"});
        }
}

module.exports.deleteToDo =  async(req, res)=>{
    const {_id}  = req.body;
    try{
        const deleteToDo = await ToDoModel.findByIdAndDelete(_id);
        console.log('Todo deleted:',deleteToDo);
    }catch(err){
        console.error('Error updating todo:', err);
        res.status(500).json({error:"todo is not possible deleted"});
    }
}