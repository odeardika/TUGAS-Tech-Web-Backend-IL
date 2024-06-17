import { query as dbQuery } from "../database/dbConnector.js";

// create notes
export const createNotes = async (req, res) => {
    const { title, note } = req.body;
    const sql = `INSERT INTO notes (title, note, datetime) VALUES (?, ?, NOW())`;
    const args = [title, note];
    try {
        const [rows] = await dbQuery(sql, args);
        return res.status(201).json({
            status: "success",
            message: "Notes created successfully",
            data: rows
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "failed",
            message: err.message
        });
    }
}

// get all notes
export const getAllNotes = async (req, res) => {
    const sql = `SELECT * FROM notes`;
    try {
        const [rows] = await dbQuery(sql);
        return res.status(200).json({
            status: "success",
            message: "Notes retrieved successfully",
            data: rows
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "failed",
            message: err.message
        });
    }
}

// get single notes
export const getSingleNotes = async (req, res) => {
    const sql = `SELECT * FROM notes WHERE id = ?`;
    const args = [req.params.id];
    try {
        const [rows] = await dbQuery(sql, args);
        return res.status(200).json({
            status: "success",
            message: "Notes retrieved successfully",
            data: rows
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "failed",
            message: err.message
        });
    }
}

// update notes
export const updateNotes = async (req, res) => {
    const { title, note, datetime } = req.body;
    const sql = `UPDATE notes SET ${title && 'title = ?'} ${note? ',note = ?': ''}, ${datetime ? 'datetime = ?' : `datetime = now()`} WHERE id = ?`;
    const args = [];
    if (title) {
        args.push(title);
    }
    if (note) {
        args.push(note);
    }
    if (datetime) {
        args.push(new Date(datetime).toISOString().slice(0, 19).replace('T', ' '));
    }
    args.push(req.params.id);
    console.log(sql, args);
    try {
        const [rows] = await dbQuery(sql, args);
        return res.status(200).json({
            status: "success",
            message: "Notes updated successfully",
            data: rows
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "failed",
            message: err.message
        });
    }
}

// delete notes
export const deleteNotes = async (req, res) => {
    const sql = `DELETE FROM notes WHERE id = ?`;
    const args = [req.params.id];
    try {
        const [rows] = await dbQuery(sql, args);
        return res.status(200).json({
            status: "success",
            message: "Notes deleted successfully",
            data: rows
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "failed",
            message: err.message
        });
    }
}