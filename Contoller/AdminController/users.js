const connection = require("../../Model/Model");
//---------------------------------------------------get----------------------------------------------
const getadminRegister = async (req, res) => {
try{
    let sqlQuery = "SELECT * FROM users";
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

//-----------------------------------------------------------------post-----------------------------------------------------------

const postadminRegister = async (req,res) =>{
try{
    let sqlQuery = "INSERT INTO users SET?"
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
//-----------------------------------------------------------put------------------------------------------------------------
const putadminRegister = async(req,res) =>{
    try{
    let data=req.body;
    let id = req.params.id;
    let sqlQuery = "UPDATE users SET? where id = ?";
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
//-----------------------------------------------------------------------update status------------------------------------------------------

const patchstatusadminRegister = async(req,res)=>{
    try{
        let sqlQury= "UPDATE users SET status=? where id = ?";
        let id = req.query.id;
        let data = req.query.status;
        console.log(id);
        console.log(data)
      
         await connection.query(sqlQury,[data,id],function(error,result){
         if(error)
         {
             console.log("Error", error.sqlMessage);
         }
         else
         {
             res.send(result);
         }
        })
    }catch(error){
        console.log(error.message);
    }      
};
//--------------------------------------------------------updatePassword--------------------------------------------------------------

const patchpwdadminRegister= async(req,res) =>{
    try{
     let data=req.body.password;
    let id = req.params.id;
    let sqlQuery = "UPDATE users SET password=? where id = ?";
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


module.exports = {getadminRegister,postadminRegister,putadminRegister,patchstatusadminRegister,patchpwdadminRegister};