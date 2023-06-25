const yup = require('yup')

module.exports = yup.object().shape({

    name: yup.string().min(3,"Please enter more than 3 letters").required("This field is required"),
    
});