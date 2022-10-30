import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { homepage_route } from './routes/student.route';
import { student_routes } from './handlers/student.handler';

dotenv.config();

const app: express.Application = express();
const { PORT } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
	console.log(`Server is Running on http://localhost:${PORT}/interviewee_registeration`);
});

homepage_route(app);
student_routes(app);
app.use(express.static(path.normalize(path.resolve('./Frontend'))));

export default app;