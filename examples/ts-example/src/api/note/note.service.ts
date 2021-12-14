import { DocumentDefinition } from 'mongoose';

import Note, { NoteDocument } from './note.model';

export async function getAllNotes() {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return notes;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function createNote(input: DocumentDefinition<NoteDocument>) {
  try {
    const newNote = await Note.create(input);
    return newNote;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getNoteById(id: string) {
  try {
    const note = await Note.findById(id);
    return note;
  } catch (error: any) {
    throw new Error(error);
  }
}
