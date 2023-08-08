const connection = require("../../Model/Model");
//---------------------------------------------------get------------------------------------------
const getuserProfile = async (req, res) => {
    try{
        let sqlQuery = "SELECT * FROM  user_profile";
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
//--------------------------------------------------post-----------------------------------------------------------------------------------------------
const postuserProfile = async (req, res) => {
    try{
        let sqlQuery = "INSERT INTO  user_profile SET?";
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

    //--------------------------------------update-------------------------------------
    const updateuserProfile = async (req, res) => {
        try{
            let data = req.body;
            let id= req.params.id;
            let sqlQuery = "UPDATE  user_profile SET? WHERE id = ?";
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
//-----------------------------------------update profile--------------------------------------
const userProfilee = async (req, res) => {
    try{
        let data = req.body;
        let id= req.params.id;
        let sqlQuery = "UPDATE  user_profile SET profile_photo=? WHERE id = ?";
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

    module.exports ={getuserProfile,postuserProfile,updateuserProfile,userProfilee}