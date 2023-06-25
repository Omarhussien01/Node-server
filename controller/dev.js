require('dotenv').config()
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
let {users} = require('../data/data')
let {categories} = require('../data/data')
let {products} = require('../data/data')


    


class DevController{
    createUser (req,res){
        users.push({email:req.body.email,password:req.body.password})
       
        return res.status(201).json({success:true})
    };

    userLogin(req,res){
        const emailAddress =req.body.email;
        const userPassword= req.body.password;
        const user = {email:emailAddress};
        const filter=users.filter(user=>user.email===emailAddress&&user.password===userPassword)
       
       
        if(filter.length!=0){
            const accressToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
            return res.status(200).json({email:emailAddress,password:userPassword,token:accressToken})

        }else{
            return res.status(400).json("user not found")
        }
    };

    createCategory(req,res){
        const name = req.body.name;
        req.body.id = uuid.v4();
        categories.push({id:req.body.id,name:req.body.name})
        return res.status(201).json({success:true,data:[{name:name}]})
    };

    getAllCategories(req,res){
       if(req.params.id){
        const category= categories.find(cat=>cat.id===req.params.id)
        return res.status(200).json({success:true,data:[category]})
       }
        return res.status(200).json({success:true,data:[...categories]})

    };

    updateCatName(req,res){
        const {id}=req.params;
        try {  
            const name = req.body.name;
            categories.forEach(cat=>{
                if(cat.id===id){
                    cat.name=name
                }
            })
            return res.status(200).json({success:true,data:[...categories]})
            
        } catch (error) {
            return res.status(400).json({success:false})
            
        }
    };

    deleteCat(req,res){
        const {id}=req.params;
        if(id){
            categories=categories.filter(cat=>cat.id!=id)
            return res.status(200).json({success:true,data:[...categories]})

        }else{
            return res.status(400).json({message:"id is missing in the url"})

        }
        
            
            
        
    };

    createProduct(req,res){
      if(categories.filter(cat=>cat.id===req.body.category_id).length>0){
        req.body.id = uuid.v4();
     
        products.push({id:req.body.id,name:req.body.name,price:req.body.price,category_id:req.body.category_id})
      
        return res.status(201).json({success:true,data:[{id:req.body.id,name:req.body.name,price:req.body.price,category_id:req.body.category_id}]})
      }else{
        return res.status(400).json({message:"Category ID doesn't exits"})
      }
        
    };

    getAllproducts(req,res){
        if(req.params.id){
         const product= products.find(product=>product.id===req.params.id)
         return res.status(200).json({success:true,data:[product]})
        }
         return res.status(200).json({success:true,data:[...products]})
 
     };

     updateproduct(req,res){
        const {id}=req.params;
        try {  
            const name = req.body.name;
            const price = req.body.price;
            const cat_id = req.body.category_id;
            products.forEach(product=>{
                if(product.id===id){
                    product.name=name;
                    product.price=price;
                    product.category_id=cat_id;
                }
            })
            return res.status(200).json({success:true,data:[...products]})
            
        } catch (error) {
            return res.status(400).json({success:false})
            
        }
    };

    deleteProduct(req,res){
        const {id}=req.params;
        if(id){
            products= products.filter(product=>product.id!=id)
            return res.status(200).json({success:true,data:[...products]})
        }else{
            return res.status(400).json({message:"id is missing in the url"})
        }
    };





}

module.exports = new DevController();