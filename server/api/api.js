
//Api entry point 
exports.apiEntry = async (req , res , next ) => {
    await res.status(200).json({ hello : "hello world" });
}
    
    
    




