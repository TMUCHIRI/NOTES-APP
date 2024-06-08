import {Router} from "express"
import { notesController } from "../controller/note.controller";

let controller = new notesController();

let note_router = Router()

note_router.post('/create', controller.createNotes);
note_router.get('/all-notes', controller.getNotes)

export default note_router;
