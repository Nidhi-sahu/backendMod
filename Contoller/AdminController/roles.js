const connection = require("../../Model/Model");
//----------------------------------------------------post---------------------------------------------------------------------------------


const getadminRole = async (req, res) => {
    try{
        let sqlQuery = "SELECT * FROM role ";
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


const postadminRole = async (req, res) => {
    try{
        let sqlQuery = "INSERT INTO  role SET?";
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


    const updateadminRole = async (req, res) => {
        try{
            let data = req.body;
            let id= req.params.role_id;
            let sqlQuery = "UPDATE role SET? WHERE role_id = ?";
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
//-----------------------------------------------------------------------------------------------------------------

// const assignRoles = (req,res) => {
//     let Info = [
//         req.body.id,
//         req.body.role_id
//     ]

//     let sql_query = "insert into role_assign set ?";
//     connection.query(sql_query,Info,(err, result) => {
//         if (err) {
//             console.log(err.sqlMessage);
//             res.send(err.sqlMessage)
//         } else {
//             res.send(result);
//             console.log("Role ADDED");
//         }
//     })
// };


const assignRoles = async (req, res) => {
    try{
        let sqlQuery = "INSERT INTO  role_assign SET?";
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

//get roles--------------------------------------------roles-----------------------------------------------------------

const userRoles = (req, res) => {
    let userInfo = [
        req.query.id,
        
    ]

        let sql_query = `select * from role_assign natural join users natural join role where id=?`;
        connection.query(sql_query,userInfo,(err, result) => {
        if (err) {
            console.log(err.sqlMessage);
            res.send(err.sqlMessage)
        } else {
            res.send(result);
          
        }
    })
};
//-----------------------------------------------------------------------------delete-------------------------------------------------------------------

const RevokeRoles =async(req, res) => {
   
      let id =  req.query.id;
      let roleid = req.query.roleid
   

        let sql_query = ` DELETE FROM role_assign WHERE id= ? AND roleid= ? `;
      await  connection.query(sql_query,[id,roleid],function(err, result) 
      {
        if (err) {
            console.log(err);
           
        } else {
            res.send(result);
          res.send(" ")
        }

            }        )
};

//---------------------------------------------------------------------------get roles----------------------------------------------------------------4

const assignRole = async (req, res) => {
    try{
        let sqlQuery = "SELECT rolename FROM role ";
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
//----------------------------------------------delete----------------------------------------------------------------------

const removerole = async(req,res)=>{
    let id = req.query.id;
    let roleid = req.query.roleid;
console.log("id",id)
console.log("roleid",roleid)
    let sqlquery=`DELETE FROM role_assign WHERE id=? AND roleid=?`;
    await connection.query(sqlquery,[id,roleid],function(error,result){
      if(error){
        console.log(error)
      }
      else{
        console.log(result)
        res.send("Role Successfully Removed")
      }
    })
  }


    module.exports = {postadminRole,getadminRole,updateadminRole,assignRoles,userRoles,RevokeRoles,assignRole,removerole}