import { Router } from 'express';

import { getAllNotesHandler, createNoteHandler } from './note.controller';

const router = Router();

router.get('/', getAllNotesHandler);
router.post('/', createNoteHandler);

export default router;
