// const mongoose=require("mongoose")
import mongoose from "mongoose";
const restaurantSchema= new mongoose.Schema({
    // id:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    type:{type:String,required:true},
    location:{type:String,required:true},
    rating:{type:Number,required:true,min:[0,"Min is 0"],max:[5,"Max is 5"]},
    top_food:{type:String,required:true}
})
// const restaurant=mongoose.model('restaurant',restaurantSchema)
export default mongoose.model('restaurant', restaurantSchema)
// module.exports=restaurant;