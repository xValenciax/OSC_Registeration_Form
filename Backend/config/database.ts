import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
	POSTGRES_HOST,
	POSTGRES_DB,
	POSTGRES_DB_test,
	POSTGRES_DB_dev,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	ENV
} = process.env;

let Client: Pool = new Pool;

if (ENV === 'dev') {
	Client = new Pool({
		host: POSTGRES_HOST,
		database: POSTGRES_DB_dev,
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
	});
}

else if (ENV === 'test') {
	Client = new Pool({
		host: POSTGRES_HOST,
		database: POSTGRES_DB_test,
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
	});
}

else {
	Client = new Pool({
		host: POSTGRES_HOST,
		database: POSTGRES_DB,
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
	});
}

export default Client;