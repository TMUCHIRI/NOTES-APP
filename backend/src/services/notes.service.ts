import mssql from 'mssql';
import { v4 as uuidv4 } from 'uuid';
import { notes } from '../interfaces/notes';
import { sqlConfig } from '../config/sql.config';

export class notesService {
  static async createNotes(note: notes) {
    const pool = await mssql.connect(sqlConfig);
    const note_id = note.id || uuidv4();

    const result = (await pool.request()
      .input('id', mssql.VarChar, note_id)
      .input('title', mssql.VarChar, note.title)
      .input('content', mssql.VarChar, note.content)
      .input('createdAt', new Date(note.createdAt))
      .execute('createNote')).rowsAffected;

    console.log(result);

    if (result[0] === 1) {
      return {
        message: "Note created successfully",
        noteId: note_id,
        noteTitle: note.title,
        noteContent: note.content,
        createdAt: note.createdAt
      };
    } else {
      return {
        message: "Note not created"
      };
    }
  }

  static async getAllNotes() {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request().execute("getAllNotes");

    console.log(result.recordset);

    if (result.recordset.length === 0) {
      return {
        message: "No notes found"
      };
    } else {
      return {
        notes: result.recordset
      };
    }
  }
}
