let users =[
    {
        email:"ahmed@gmail.com",
        password: "ahmed@Ahmed123"
    },
    {
        email:"mahmoud@gmail.com",
        password: "mahmoud@Ahmed123"
    },
    {
        email:"ali@gmail.com",
        password: "ali@Ahmed123"
    },
    {
        email:"ziad@gmail.com",
        password: "ziad@Ahmed123"
    },
]


let categories = [
    {
        id:"be42826b-146d-4644-88de-a50c0b6d6876",
        name:"mobiles"
       
    },
    {
        id:"4b2a0b56-8c84-472e-83ab-e515dece841f",
        name:"laptops"
    },
    {
        id:"ba5ec63f-20fb-49fc-8fdc-c2756d0faade",
        name:"watches"
    }
]

let products=[
    {
        id:"1",
        name: "iphone 14",
        price: "1100",
        category_id : "be42826b-146d-4644-88de-a50c0b6d6876"
    },
    {
        id:"2",
        name: "iphone 13",
        price: "1000",
        category_id : "be42826b-146d-4644-88de-a50c0b6d6876"
    },
    {
        id:"3",
        name: "iphone 12",
        price: "900",
        category_id : "be42826b-146d-4644-88de-a50c0b6d6876"
    },
    {
        id:"4",
        name: "Lenovo",
        price: "1750",
        category_id : "4b2a0b56-8c84-472e-83ab-e515dece841f"
    },
    {
        id:"5",
        name: "AlienWare",
        price: "2050",
        category_id : "4b2a0b56-8c84-472e-83ab-e515dece841f"
    },
    {
        id:"6",
        name: "casio",
        price: "350",
        category_id : "ba5ec63f-20fb-49fc-8fdc-c2756d0faade"
    },
    
    {
        id:"7",
        name: "Rolex",
        price: "1500",
        category_id : "ba5ec63f-20fb-49fc-8fdc-c2756d0faade"
    },
]

module.exports = {users,categories,products}