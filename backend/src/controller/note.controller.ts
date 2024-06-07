import { error } from "console";
import { Request, Response } from "express";
import { notesService } from "../services/notes.service";


export class notesController{

    async createNotes(req: Request, res: Response){
        try {
            
            let {id, Title, Content, CreatedAt} = req.body;

            if(error){
                return res.status(400).json({
                    message: error
                })
            }

            let result = await notesService.createNotes(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.json({
                error
            })
        }
    }

    async getNotes(req: Request, res: Response){
        try {
            let result = await notesService.getAllNotes(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.json({
                error
            })
        }
    }
}