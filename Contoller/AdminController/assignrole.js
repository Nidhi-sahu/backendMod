const connection = require("../../Model/Model");
//---------------------------------------------get-----------------------------------------------------


const getassignRole = async (req, res) => {
    try{
        let sqlQuery = "SELECT * FROM role_assign ";
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



//---------------------------------------------post-------------------------------------


const postassignRole = async (req, res) => {
    try{
        let data = req.body;
        let sqlQuery = "INSERT INTO role_assign SET?";
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

//--------------------------------------update---------------------------------------------

const updateassignRole = async (req, res) => {
    try{
        let data = req.body;
        let id= req.params.id;
        let sqlQuery = "UPDATE role_assign SET? WHERE id = ?";
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
//----------------------------------------------------------join get------------------------------------------------------
const joinassignroles = async(req,res)=>{
    try{
         let data = req.body;
    let sqlquery='select * from role_assign natural join users natural join role';
    await connection.query(sqlquery,data,function(error,result){
      if(error){
        console.log("error",error.sqlMessage)
        
      }
      else{
         console.log(result)
        res.json(result)
      }
      })
  }
  catch(error){
    console.log(error.message);
}

};


//---------------------------------------------------delete------------------------------------------------------------------
    const deleteassignRole = async (req, res) => {
        try{
            let id= req.params.id;
            let sqlQuery = "DELETE FROM role_assign where id=?";
            await connection.query(sqlQuery,id,function(error,result)
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
    module.exports = {postassignRole,getassignRole,updateassignRole,deleteassignRole,joinassignroles};