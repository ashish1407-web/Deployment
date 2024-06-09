const BookSchema=require('./Schema')
const getUser = async (req, res)=>{
    try {
     return res.send("Details is here");
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}
const getUserDetails=async(req,res)=>{
try{
let bookDetails=await BookSchema.find();
return res.send({msg:bookDetails});
}catch(err){
console.log(err);
}
}
module.exports={getUser,getUserDetails}