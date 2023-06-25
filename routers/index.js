const express = require('express')
const router = express.Router();
const devControl = require('../controller/dev')
const validate = require('../middleware/validateSchema')
const auth = require('../middleware/auth')
const registerSchema = require('../dto/createUser')
const loginSchema= require('../dto/userLogin')
const createCatSchema = require('../dto/createCategory')
const createProductSchema = require('../dto/createProducts')

router.post('/login',validate(loginSchema),devControl.userLogin)
router.post('/registration',validate(registerSchema) ,devControl.createUser)
router.post('/category',validate(createCatSchema),devControl.createCategory)
router.get('/category',devControl.getAllCategories)
router.get('/category/:id',devControl.getAllCategories)
router.put('/category/:id',validate(createCatSchema),devControl.updateCatName)
router.delete('/category/:id',devControl.deleteCat)
router.post('/products',validate(createProductSchema),devControl.createProduct)
router.get('/products',devControl.getAllproducts)
router.get('/products/:id',devControl.getAllproducts)
router.put('/products/:id',validate(createProductSchema),devControl.updateproduct)
router.delete('/products/:id',devControl.deleteProduct)


module.exports = router;