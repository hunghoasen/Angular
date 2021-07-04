const express = require('express');
		const cors = require('cors');

		const app = express();

		var corsOptions = {
		  origin: 'http://localhost:4200',
		  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
		}

		app.use(cors(corsOptions));
		app.use(express.json());// express >4.16

		app.listen(8000, () => {
		  console.log('Server started!');
		});
		app.route('/api/products').get((req, res) => {
		  console.log('all products');
			res.send([{id:1, name: 'lilly' }, { id:2, name: 'lucy' }]
			);
		});
		// dung cho phan insert
		app.route('/api/insert').post((req, res) => {

		  console.log('insert item');
		  console.log('item info:'+req.body);
			//res.send(201, req.body);
		  res.status(201).send(req.body);
		  });
