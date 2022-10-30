import exress, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { student, students } from '../models/student.model';

dotenv.config();

const { TOKEN_SECRET } = process.env;

const stud = new students();

const index = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await stud.index();
        //admin page will handle logic here
        res.json(result);
    }
    catch (err) {
        res.status(400).json(`Error ${err}`).end();
    }
};

const registerStud = async (req: Request, res: Response): Promise<void> => {
    try {
        const st: student = {
            stud_id: req.body.stud_id,
            stud_first_name: req.body.stud_first_name,
            stud_last_name: req.body.stud_last_name,
            stud_gender: req.body.stud_gender,
            stud_email: req.body.stud_email,
            stud_phone_no: req.body.stud_phone_no,
            stud_program: req.body.stud_program,
            committee: req.body.committee,
            stud_college: req.body.stud_college,
            stud_college_year: req.body.stud_college_year,
            stud_university: req.body.stud_university,
            interview_day: req.body.interview_day,
            interview_date: req.body.interview_date,
            sec_committee: req.body.sec_committee,
            sec_interview_day: req.body.sec_interview_day,
            sec_interview_date: req.body.sec_interview_date,
            stud_university_other: req.body.stud_university_other,
            stud_college_other: req.body.stud_college_other,
        };

        const result = await stud.addStudent(st);
        res.json(req.body);
    }
    catch (err) {
        res.status(400).json(`Error ${err}`).end();
    }
};

const deleteStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await stud.delete(req.body.stud_id);
        res.json(result);
    }
    catch (err) {
        res.status(400);
        return;
    }
};

export const student_routes = (app: Application) => {
    app.post('/interviewee_registeration', registerStud);
    app.get('/admin/students', index);
    app.delete('/admin/students', deleteStudents);
};