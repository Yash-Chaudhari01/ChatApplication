const express = require('express');
const route = express.Router();
const { CreateUser ,getUsers,startChatting,addMessage,getChat}  =require('../controllers/UserController');



route.get('/get',getUsers);
route.post('/startchat',startChatting);
route.post('/create',CreateUser)
route.post('/add/message',addMessage)
route.get('/get/message/:id',getChat)


module.exports=route;
