import { Request, Response, Application } from 'express';
import path from 'path';

const getForm = async (req: Request, res: Response): Promise<void> => {
	res.status(200).sendFile(path.normalize(path.resolve('Frontend/index.html')));
};

export  const homepage_route = (app: Application) => {
	app.get('/interviewee_registeration', getForm);
};