import mongoose from "mongoose"
const {ObjectId} = mongoose.Schema

const categoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    subCategories:[{
        name: {
            type: String
        }
    }],
        image:{
            type:String,
        }
    
},{
timestamps: true
})

const Categories = mongoose.models.Categories || mongoose.model("Categories", categoriesSchema)

export default Categories