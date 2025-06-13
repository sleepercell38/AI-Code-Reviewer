import generatecontent from "../services/ai.service.js"

export const getreview= async(req,res)=>{

    const code= req.body.code;
    if(!code){
        res.status(400).send({message:"prompt must be there"})
    }

    const response = await generatecontent(code)
    res.send(response)



}