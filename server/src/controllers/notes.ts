import { Request, Response, NextFunction } from 'express'
const Notes = require('../models/Notes')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { title, videoUrl } = req.body
    const { userData } = req.body.tokenData

    const savedNote = await Notes.upsert(userData.user_id, title, videoUrl)
    next()
}

module.exports.getAllNotes = () => { }