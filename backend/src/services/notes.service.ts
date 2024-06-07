import mssql from 'mssql'
import {v4} from 'uuid'
import lodash from 'lodash'

import { notes } from '../interfaces/notes'
import { sqlConfig } from '../config/sql.config'

export class notesService{
    static getAllNotes(body: any) {
        throw new Error("Method not implemented.")
    }
    static createNotes(body: any) {
        throw new Error("Method not implemented.")
    }

    async createNotes(notes: notes){
        let pool =  await mssql.connect(sqlConfig);

    let notes_id = v4()

    let result = (await pool.request()
       .input('id', mssql.VarChar, notes_id)
       .input('title', mssql.VarChar, notes.title)
       .input('content', mssql.VarChar, notes.content)
       .input('CreatedAt', new Date().getTime().toString)
       .execute('createNote')).rowsAffected

       if(result[0] = 1){

        return{
            message: "Note created successfully"
        }
       }else{
        return{
            message: "Note not created"
        }
       }
    }

       async getAllNotes(){
        let pool = await mssql.connect(sqlConfig)

        let result = (await pool.request().execute("getAllNotes")).recordset

        if(result.length == 0){
            return{
                message: "No notes found"
            }
        }else{
            return{
                notes: result
            }
       }
       }
}