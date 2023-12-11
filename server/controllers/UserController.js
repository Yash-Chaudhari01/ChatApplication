const User = require("../models/User.js");
const  ConnectUser = require("../config/ConnectUser.js");
const Chat = require('../config/Messages.js')

async function CreateUser (req, res){
   
    
    try {
        const isExist = await User.findOne({ sub: req.body.sub });

        if (isExist) {
            return res.status(200).json({
                success: false,
                message: "User Already Exists"
            });
        }

        const newUser = new User(req.body);
        await newUser.save();

        return res.status(200).json({
            success: true,
            message: "User Entry Created"
        });
    } catch (err) {
        console.error("Error in CreateUser:", err); 
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message,
        });
    }
};



async function getUsers (req, res)  {
    try {
        const allUsers = await User.find({});
        return res.status(200).json(allUsers);
    } catch (err) {
        console.error("Error in getUsers:", err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message,
        });
    }
};

async function startChatting(req, res)  {
    try {
        
        const { senderId, receiverId } = req.body;

        const isExist = await ConnectUser.findOne({ members: { $all: [senderId, receiverId] } });

        if (isExist) {
            return res.status(200).json(isExist);
        }

        const newConversation = new ConnectUser({
            members: [senderId, receiverId]
        });

        await newConversation.save();

        return res.status(200).json({
            success: true,
            message: "Conversation Created"
        });
    } catch (err) {
        console.error("Error in startChatting:", err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message,
        });
    }
};





async function addMessage(req, res) {
    try {
        

        const newMessage = new Chat(req.body);
       const data= await newMessage.save();

       
        console.log("After SavingDocument",data);
        
// const updatedConnection =await Connection.findByIdAndUpdate(req.body.conversetionId, { messages: data.value });
//const updatedConnection = await Connection.findByIdAndUpdate(req.body.conversetionId, { messages: data.value });
const updatedConnection = await ConnectUser.findByIdAndUpdate(
    req.body.conversetionId, { value: data.value }

  );
     
        res.status(200).json({
            success: true,
            Message: "Message Added Successfully",
            data,
            updatedConnection
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            success: false,
            Message: "Internal Server Error",
        });
    }
}


async function getChat(req,res){
    console.log("At getChat Section");
    try{
     const data =await Chat.find({conversetionId:req.params.id});
     return res.status(200).json(
       {
        message:"Fetch All Message Successfully",
        data
       }
        )
      
    }catch(err){
        console.log(err.message);
    }
}



module.exports = {
    CreateUser,
    getUsers,
    startChatting,
    addMessage,
    getChat
  };