import mongoose, { Document } from 'mongoose';

export interface NoteDocument extends Document {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      upperCase: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Note = mongoose.model<NoteDocument>('Note', NoteSchema);

export default Note;
