const express = require('express');
const sql = require('mysql2');
const app = express();
const port = 5000;

const dbConfig = {
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'WaisDatabase'
};

const cors = require('cors');
const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionSuccessStatus: 200
};

class MainBackend
{
	constructor()
	{
		this.app = express();
		this.port = 5000;
		this.initializeMiddlewares();
		this.initializeRoutes();
		this.initializeSQL();
		this.start();
		this.setupCloseHandler();
	}

	initializeMiddlewares()
	{
		this.app.use(cors(corsOptions));
		this.app.use(express.json());
	}

	initializeRoutes()
	{
		this.app.get('/api', (req, res) => {
			let id = req.query.id;
			if (!id || isNaN(id))
			{
    			id = 1;
  			}

			this.connection.query(`SELECT * FROM testTable WHERE id = ${id}`, (err, results) => {
				if (err) throw err;
				console.log(`Data retrieved from testTable WHERE id = ${id}`);
				res.json(results);
			});
		});

		this.app.post('/api/data', (req, res) =>
		{
			const { name } = req.body;
			console.log(name);
			res.json({ message: 'Data received successfully' });
		});
	}

	initializeSQL()
	{
		this.connection = sql.createConnection(dbConfig);
		this.connection.connect((error) => {
			if (error)
			{
				console.error('Error connecting to MySQL database:', error);
				return;
			}
			console.log('Connected to MySQL database');
		});
	}

	start()
	{
		this.app.listen(this.port, () =>
		{
			console.log(`Server is running on http://localhost:${this.port}`);
		});
	}

	setupCloseHandler()
	{
		process.on('SIGINT', () =>
		{
			this.connection.end();
			console.log('MySQL connection closed');
			process.exit();
		});
	}
}

function main()
{
	const mainBackend = new MainBackend();
}

main();
