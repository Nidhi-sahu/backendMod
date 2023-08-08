const connection = require("../../Model/Model");

//-------------------------------------get------------------------------

const getSubcategory = async (req, res) => {
    try{
        let sqlQuery = "SELECT * FROM   subcategory";
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
  //-------------------------------------------------------------post-------------------------------------------  


const postsubCategory = async (req, res) => {
    try{
        let sqlQuery =   "INSERT INTO subcategory SET?";
        let data = req.body;
        await connection.query(sqlQuery,data,function(error,result)
        {
            if (error){
                console.log("error",sqlMessage)
            }
            else {
                res.json(result);
            }
        })
    }
    catch(error){
        console.log(error.message);
    }
};
//------------------------------------------------------------------update--------------------------------------------------------

const updatesubCategory = async (req, res) => {
    try{
        let data = req.body;
        let id= req.params.sub_category ;
        let sqlQuery = "UPDATE subcategory SET? WHERE sub_category = ?";
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
 

    module.exports ={getSubcategory,postsubCategory,updatesubCategory}
