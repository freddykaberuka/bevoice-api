import models from '../models'

//add article

function addArticle(req,res){
    const article ={
        b_title: req.body.b_title,
        b_body: req.body.b_body,
        b_image: req.body.b_image,
        b_conclusion: req.body.b_conclusion
    }
    models.Article.create(article).then(result=>{
        res.status(201).json({
            message:"Blog added successfull"
        })
    }).catch(err=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}

//list articles
function viewArticle(req,res){
    models.Article.findAll().then(data=>{
        res.status(200).json({
            message:"list of article",
            data:data
        })
    }).catch(err=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}

// show article
function showArticle(req,res){
    const id = req.params.id;
    models.Article.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result)
        }else{
           res.status(404).json({
            message:"data not found"
        })
        }
        
    }).catch(err=>{
        res.status(500).json({
            message:"something went wrong",
            err
        })
    })
}

//update article
function updateArticle(req,res){
    const id = req.params.id;
    const updateArt = {
        b_title: req.body.b_title,
        b_body: req.body.b_body,
        b_image: req.body.b_image,
        b_conclusion:req.body.b_conclusion
    }
    models.Article.update(updateArt,{where:{id:id}}).then(result=>{
        res.status(201).json({
            message:"article is updated successfull"
        })
    }).catch(err=>{
        res.status(500).json({
            message:"update failed"
        })
    })
}
// delete blog
function deleteArticle(req,res){
    const id = req.params.id;
    models.Article.destroy({where:{id:id}}).then(result =>{
        if(result){
            res.status(201).json({
                message:"blog deleted successful"
            })
        }else{
            res.status(404).json({
                message:"data not found"
            })
        }
    }).catch(err=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}
module.exports = {
    addArticle: addArticle,
    viewArticle: viewArticle,
    showArticle: showArticle,
    deleteArticle: deleteArticle,
    updateArticle: updateArticle
}