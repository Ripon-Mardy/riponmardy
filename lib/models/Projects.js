import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description : {type : String},
    image : {type : String},
    github : {type : String},
    live : {type : String},
    tags : [Array],
    
}, {timestamps : true})


export default mongoose.models.Project || mongoose.model('Project', projectSchema)