 const {Router} = require('express');
const {getAllToDo, getToDo, createToDo, deleteToDo, updateToDo } = require('../controllers/ToDoController');
 
 const router = Router();

 router.get('/',getAllToDo);
 router.get('/gettodo',getToDo);

 router.post('/create', createToDo);
 router.post('/update', updateToDo);
 router.post('/delete', deleteToDo);

 module.exports = router;