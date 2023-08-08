const connection = require("../../Model/Model");

//-------------------------------------------------------------get------------------------------------------------------------------------------------------

const getOffer = async (req, res) => {
    try{
        let sqlQuery = "SELECT * FROM  offer";
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

//--------------------------------------------------post------------------------------------------------------------------------------------------

const postoffer = async (req, res) => {
    try{
        let sqlQuery = "INSERT INTO offer SET?";
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

//-----------------------------------------------------------update--------------------------------------------------------------------------

const updateoffer = async (req, res) => {
    try{
        let data = req.body;
        let id= req.params.offercode;
        let sqlQuery = "UPDATE offer SET? WHERE offercode= ?";
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
//---------------------------------------------------------------status update-----------------------------------------------------------------


const updatestatusoffer = async(req,res)=>{
    try{
        let sqlQury= "UPDATE  offer SET status=? WHERE offercode=? ";
        let id = req.query.offercode;
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

    module.exports = {getOffer,postoffer,updateoffer,updatestatusoffer};