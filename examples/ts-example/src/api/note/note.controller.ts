import { Request, Response, NextFunction } from 'express';

import { getAllNotes, createNote } from './note.service';

export async function getAllNotesHandler(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const notes = await getAllNotes();
    return res.status(200).json(notes);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
}

export async function createNoteHandler(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const newNote = await createNote(req.body);
    return res.status(201).json(newNote);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
}
