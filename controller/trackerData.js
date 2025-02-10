import { TrackerData } from "../models/trackerData.model.js";


export const sendData = async(req,res)=>{
    try {
        
        const { deviceId, location, audioFileUrl, contact, sms, notifications } = req.body;
        const newData = new TrackerData({ deviceId, location, audioFileUrl, contact, sms, notifications });
        await newData.save();

        return res.status(200).json({
            success: true,
            message: "Data saved",
          });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
          });
    }
}

export const getData = async(req,res)=>{
    try {
        const data = await TrackerData.find();
        return res.status(200).json({
            success: true,
            message: "Data got",
          });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
          });
    }
}