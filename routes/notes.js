import { Router } from "express";
import { 
    createNotes, 
    getAllNotes,
    getSingleNotes,
    updateNotes,
    deleteNotes
} from "../controller/notesController.js";

export const router = Router();

router.post("/notes", createNotes);

router.get("/notes", getAllNotes);

router.get("/notes/:id", getSingleNotes);

router.put("/notes/:id", updateNotes);

router.delete("/notes/:id", deleteNotes);



