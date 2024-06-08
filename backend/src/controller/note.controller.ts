import { Request, Response } from "express";
import { notesService } from "../services/notes.service";

export class notesController {
  async createNotes(req: Request, res: Response) {
    try {
      const { id, title, content, createdAt } = req.body;

      // Validate input
      if (!title || !content || !createdAt) {
        return res.status(400).json({
          message: "Title, Content, and CreatedAt are required"
        });
      }

      const result = await notesService.createNotes(req.body);
      console.log(result);
      
      return res.status(201).json(result);
      
    } catch (error) {
      console.error('Error creating note:', error);
      return res.status(500).json({
        message: "Error creating note",
        error
      });
    }
  }

  async getNotes(req: Request, res: Response) {
    try {
      const result = await notesService.getAllNotes();
      console.log(result);
      return res.status(200).json(result);
    } catch (error) {
      console.error('Error fetching notes:', error);
      return res.status(500).json({
        message: "Error fetching notes",
        error
      });
    }
  }
}
