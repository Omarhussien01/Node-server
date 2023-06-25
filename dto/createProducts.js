const yup = require('yup')

module.exports = yup.object().shape({

    
    name: yup.string().min(3,"Please enter more than 3 letters").required("This field is required"),
    price: yup.number("This field is a number").required("This field is required"),
    category_id: yup.string().required()

});