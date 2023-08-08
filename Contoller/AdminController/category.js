const connection = require("../../Model/Model");
//--------------------------------------------------get-------------------------------------------------------
const getCategory = async (req, res) => {
    try{
        let sqlQuery = "SELECT * FROM  category";
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
//-------------------------------------------------------------------getname-------------------------------------------
    const getCategoryName= async (req, res) => {
        try{
            let sqlQuery = "SELECT  category_name FROM  category";
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
 //----------------------------------------------------------------------------insert-----------------------------------------------------------   
 
          const postCategory = async (req, res) => {
            try{
                let data =  [
                    req.body.category_id,
                    req.body.category_name,
                    req.body.category_image,
                ];
                let sqlQuery = "INSERT INTO category(category_id,category_name,category_image) values(?,?,?)";
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
 //--------------------------------------------------------------------update----------------------------------------------------------

 const updateCategory = async (req, res) => {
    try{
        let data = req.body;
        let id= req.params.category_id ;
        let sqlQuery = "UPDATE category SET? WHERE category_id = ?";
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
//------------------------------------------------------------status update-------------------------------------------------------------------------------

// const updatecategorystatus = async (req, res) => {
//     try{
//         let data = req.body.status;
//         let id= req.params.category_id;
//         let sqlQuery = "UPDATE category SET status=? where category_id = ?";
//         await connection.query(sqlQuery,[data,id],function(error,result)
//     {
//             if (error){
//                 console.log("error",error.sqlMessage)
//             }
//             else{
//                 res.json(result);
//             }
//         })
//     }
//         catch(error){
//             console.log(error.message);
//         }
//     };

const updatecategorystatus = async(req,res)=>{
    try{
        let sqlQury= "UPDATE  category SET status=? WHERE category_id=? ";
        let id = req.query.category_id;
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
 
    module.exports = {getCategory,getCategoryName,postCategory,updateCategory,updatecategorystatus}