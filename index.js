const express = require("express");

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken")
const app = express();
app.use(express.json());
var cors = require("cors");
 app.use(cors(
    // {
    //     origin: ["http://localhost:3000"],
    //     methods: ["POST,GET"],
    //     credentials: true
    // }
 ));

const bodyparser = require("body-parser");
app.use(bodyparser.json());
const swaggerui = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");
const port = 3002;

const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API documentation by NIDHI",
            version: "1.0.0"
        },
        servers: [

          {
             url: "http://localhost:3002"
         }
       ]

    },
    apis: ['../ecombackend/Routes/AdminRoutes/rolesRoute.js','../ecombackend/Routes/AdminRoutes/usersRoute.js']
    
}
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerjsdoc(option)))

//-------------------------------------------------------------------------------admin----------------------------------------------------------------
const {adminRegister} = require("./Routes/AdminRoutes/usersRoute");
app.use("/", adminRegister);

const {adminRole} = require("./Routes/AdminRoutes/rolesRoute");
app.use("/",adminRole);

const {assignRole} = require("./Routes/AdminRoutes/assginroleRoute");
app.use("/",assignRole);

const {userProfile} = require("./Routes/AdminRoutes/userprofileRoute");
app.use("/",userProfile);

const {category} = require("./Routes/AdminRoutes/categoryRoute");
app.use("/",category);

const {subCategory} = require("./Routes/AdminRoutes/subcategoryRoute");
app.use("/",subCategory);

const {offer} = require("./Routes/AdminRoutes/offerRoute");
app.use("/",offer);

//---------------------------------------------------------------------------retailer--------------------------------------------------------------

const {retailerRegistration} = require("./RoutesRetailer/retailerRegistrationRoute");
app.use("/",retailerRegistration);

// app.post('/login',(req,res) => {
//     const sql = "SELECT * FROM retailer_registration WHERE email = ? AND password =?";
//     connection.query(sql,[req.body.email, req,body.password],(err,data) =>{
//         if(err) return res.json({Message: "server side error"});
//         if(data.lenght > 0){
//             const name = data[0].name;
//             const token = jwt.sign({name}, "our-jsonwebtoken-secret-key",{expiresIn: '1day'});
//             res.cookie('token',token);
//             return res.json({status:"success"})
//         }
//         else{
//             return res.json({Message:"No Records existed"})
//         }
//     })
// })

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});

