 //with the help of promise
 const asyncHandler=(requestHandler)=>{
(req,res,next)=>{
Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))

}
 }
 export {asyncHandler}

//const asyncHandler=()=>{}
//const asyncHandler=(func)=>()=>{} 
//const asyncHandler=(func)=>()=>{}    

//  const asyncHandler=(fn)=>async(req,rex,next)=>{
//    try{
//       await fn(req,res,next)
//    } catch(error){
//     res.status(error.code ||500) .json({
//         success:false,
//         message:error.message 
//     })
//    }
//  }