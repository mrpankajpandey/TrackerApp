import mongoose from "mongoose";


const trackerSchema = new  mongoose.Schema({
    deviceId:{
        type:String,
        required:true
    },
    location:{
        lat:Number, lng:Number
    },
    audioFileUrl:{
        type:String
    },
    contact:{
        type:Array
    },
    sms:{
        type:Array
    },
    notifications:{
           type:Array
    }
},{timestamps:true})

export const TrackerData = mongoose.model('TrackerData',trackerSchema);