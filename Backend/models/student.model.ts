import Client from '../config/database';
import dotenv from 'dotenv';

dotenv.config();

export type student = {
    stud_id: string,
    stud_first_name: string,
    stud_last_name: string,
    stud_gender: string,
    stud_email: string,
    stud_phone_no: string,
    stud_program: string,
    committee: string,
    stud_college: string,
    stud_college_year: string,
    stud_university: string
    interview_day: string,
    interview_date: string,
    sec_committee?: string,
    sec_interview_day?: string,
    sec_interview_date?: string,
    stud_university_other?: string,
    stud_college_other?: string,
};

export class students {
        //admin page will handle logic here
	async index(): Promise<student[]>{
		try {
			const db_conn = await Client.connect();
			const sql = 'SELECT * FROM students';
            const res = (await db_conn.query(sql)).rows;
            db_conn.release();
			return res;            
		}
		catch (err) {
			throw new Error(`Database connection error ${err}`);
		}
	}
    
	async addStudent(stud: student): Promise<void>{
		try {
			const db_conn = await Client.connect();
			const sql = `INSERT INTO students
            (stud_id, stud_name, stud_gender, stud_email, stud_phone_no, stud_program, committee, stud_college, stud_college_year, stud_university, interview_day, interview_date)
                values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
			const res = await db_conn.query(sql, [stud.stud_id, stud.stud_first_name + stud.stud_last_name, stud.stud_gender, stud.stud_email, stud.stud_phone_no,
                stud.stud_program, stud.committee, stud.stud_college, stud.stud_college_year, stud.stud_university, stud.interview_day, stud.interview_date]);    
            
            if (stud.sec_committee !== '' || stud.sec_committee !== undefined || stud.sec_committee !== null) {
                const newsql = 'UPDATE students SET sec_committee=$1, sec_interview_day=$2, sec_interview_date=$3 WHERE stud_id=$4';
                const res2 = await db_conn.query(newsql, [stud.sec_committee, stud.sec_interview_day, stud.sec_interview_date, stud.stud_id]);
            }
            if ((stud.stud_university_other !== '' || stud.stud_university_other !== undefined || stud.stud_university_other !== null) && stud.stud_university === 'other') {
                const newsql = 'UPDATE students SET stud_university=$1 WHERE stud_id=$2';
                const res2 = await db_conn.query(newsql, [stud.stud_university_other, stud.stud_id]);
            }
            if ((stud.stud_college_other !== '' || stud.stud_college_other !== undefined || stud.stud_college_other !== null) && stud.stud_college === 'other') {
                const newsql = 'UPDATE students SET stud_college=$1 WHERE stud_id=$2';
                const res2 = await db_conn.query(newsql, [stud.stud_college_other, stud.stud_id]);
            }
		}
		catch (err) {
			throw new Error(`Database connection error ${err}`);
		}
    }
    
        //admin page will handle logic here
    async delete(id: number): Promise<student>{
        try {
            const db_conn = await Client.connect();
            const sql = 'DELETE FROM students WHERE id=($1)';
            const returnedUser = (await db_conn.query(sql, [id])).rows;
            db_conn.release();
            return returnedUser[0];
        }
        catch (err) {
            throw new Error(`database connection error ${err}`);
        }
    }
}