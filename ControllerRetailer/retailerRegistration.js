const connection = require("../Model/Model")
//--------------------------------------------------------------post----------------------------------------------------
const postRetailer= async (req, res) => {
    try{
        let sqlQuery = "INSERT INTO retailer_registration SET?";
        let data = req.body;
        await connection.query(sqlQuery,data,function(error,result)
    {
            if (error){
                console.log("error",error.sqlMessage)
            }
            else{
                res.json(result);
            }
        })
    }
        catch(error){
            console.log(error.message);
        }
    };
//--------------------------------------------------------------------get------------------------------------------------------------
const getretailer = async (req, res) => {
    try{
        let sqlQuery = "SELECT * FROM retailer_registration ";
        let data = req.body;
        await connection.query(sqlQuery,data,function(error,result)
    {
            if (error){
                console.log("error",error.sqlMessage)
            }
            else{
                res.json(result);
            }
        })
    }
        catch(error){
            console.log(error.message);
        }
    };
//----------------------------------------------------------------getstatus----------------------------------------------------------------------
const getstatusretailer = async (req, res) => {
    try{
        let sqlQuery = "SELECT * FROM retailer_registration where retailer_id ";
        let data = req.body;
        await connection.query(sqlQuery,data,function(error,result)
    {
            if (error){
                console.log("error",error.sqlMessage)
            }
            else{
                res.json(result);
            }
        })
    }
        catch(error){
            console.log(error.message);
        }
    };
//------------------------------------------------------------update-----------------------------------------------------------
const updateretailer = async (req, res) => {
    try{
        let data = req.body;
        let id= req.params.retailer_id;
        let sqlQuery = "UPDATE retailer_registration SET? WHERE retailer_id = ?";
        await connection.query(sqlQuery,[data,id],function(error,result)
    {
            if (error){
                console.log("error",error.sqlMessage)
            }
            else{
                res.json(result);
            }
        })
    }
        catch(error){
            console.log(error.message);
        }
    };
//---------------------------------------------------------------------updatestatus----------------------------------------------------
const updatestatusretailer = async (req, res) => {
    try{
        let data = req.query.status;
        let id= req.query.retailer_id;
        let sqlQuery = "UPDATE retailer_registration SET status=? where retailer_id = ?";
        await connection.query(sqlQuery,[data,id],function(error,result)
    {
        console.log("result",result);
            if (error){
                console.log("errorrrrrrr",error.sqlMessage)
            }
            else{
                res.json(result);
            }
        })
    }
        catch(error){
            console.log(error.message);
        }
    };
//------------------------------------------------------------updatepicture-----------------------------------------------------------

const updatepictureretailer = async (req, res) => {
    try{
        let data = req.body.profile_photo;
        let id= req.params.retailer_id;
        let sqlQuery = "UPDATE retailer_registration SET  profile_photo=? where retailer_id = ?";
        await connection.query(sqlQuery,[data,id],function(error,result)
    {
            if (error){
                console.log("error",error.sqlMessage)
            }
            else{
                res.json(result);
            }
        })
    }
        catch(error){
            console.log(error.message);
        }
    };
//-------------------------------------------------------------------update passswod----------------------------------------------------------------
const updatepwdretailer = async (req, res) => {
    try{
        let data = req.body.password;
        let id= req.params.retailer_id;
        let sqlQuery = "UPDATE retailer_registration SET  password=? where retailer_id = ?";
        await connection.query(sqlQuery,[data,id],function(error,result)
    {
            if (error){
                console.log("error",error.sqlMessage)
            }
            else{
                res.json(result);
            }
        })
    }
        catch(error){
            console.log(error.message);
        }
    };

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// app.post('/login',(req,res) => {
//     const sql = "SELECT * FROM retailer_registration WHERE email = ? AND password =?";
//     connection.query(sql,[req.body.email, req,body.password],(err,data) =>{
//         if(err) return res.jsona({Message: "server side error"});
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
    module.exports ={postRetailer,getretailer, getstatusretailer,updateretailer,updatestatusretailer,updatepictureretailer,updatepwdretailer}