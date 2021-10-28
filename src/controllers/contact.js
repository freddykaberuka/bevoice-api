import models from '../models'

function addMessage(req,res){
    const addMsg = {
        fullName:req.body.fullName,
        email:req.body.email,
        subject:req.body.subject,
        c_message:req.body.c_message
    }
    models.Contact.create(addMsg).then(result=>{
        res.status(201).json({
            message:"msg sent successful"
        })
    }).catch(error=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}

function showMessages(req,res){
    models.Contact.findAll().then(data=>{
        res.status(200).json({
            data
        })
    }).catch(error=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}

function showMessage(req,res){
    const id = req.params.id;
    models.Contact.findByPk(id).then(data=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({message:"no data found"})
        }
    }).catch(error=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}

function deleteMessage(req,res){
    const id = req.params.id;
    models.Contact.destroy({where:{id:id}}).then(result=>{
        if(result){
            res.status(200).json({
            message:"message deleted successfull"
        })
        }else{
            res.status(404).json({
                message:"data not found"
            })
        }
    }).catch(error=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}

module.exports={
    addMessage:addMessage,
    showMessages:showMessages,
    showMessage:showMessage,
    deleteMessage:deleteMessage
}