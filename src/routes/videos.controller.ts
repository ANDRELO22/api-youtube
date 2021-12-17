import { RequestHandler } from "express";
import videos from "./videos";
import Video from "./videos";

export const createVideos: RequestHandler = async (req, res) => {
    const videosFund = await Video.findOne({url: req.body.url})
    if(videosFund)
    return res.status(301).json({message: 'the URL already exists' })
    const videos = new Video(req.body)
    const saveVideo = await videos.save()
    console.log(saveVideo);
    res.json(saveVideo);
}

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
    return res.json(videos);
    } catch (error) {
        res.json(error)
    }
    
    res.json('getting a video')
}

export const deleteVideos: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if(!videoFound) return res.status(204).json();
    return res.json(videoFound,)
}

export const updateVideos: RequestHandler = async (req, res) => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id,
        req.body, { new: true });
        if(!videoUpdate) return res.status(204).json();
    res.json(videoUpdate)
}

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);
    if(!videoFound) return res.status(204).json();
    return res.json(videoFound)
} 