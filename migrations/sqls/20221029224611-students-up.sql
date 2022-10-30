/* Replace with your SQL commands */
CREATE TABLE students(
    stud_id VARCHAR(11) PRIMARY KEY,
    stud_name VARCHAR(50) NOT NULL,
    stud_gender VARCHAR(10) NOT NULL,
    stud_email VARCHAR(100) NOT NULL,
    stud_phone_no VARCHAR(14) NOT NULL,
    stud_program VARCHAR(20) NOT NULL,
    committee VARCHAR(14) NOT NULL,
    sec_committee VARCHAR(14),
    stud_college_year VARCHAR(10) NOT NULL,
    interview_day VARCHAR(10) NOT NULL,
    interview_date VARCHAR(10) NOT NULL,
    sec_interview_day VARCHAR(10),
    sec_interview_date VARCHAR(10),
    stud_college VARCHAR(100) NOT NULL,
    stud_university VARCHAR(100) NOT NULL
);