// ./server/controller.js',
const db = require('../database/index.js');

module.exports = {
	get: (req, res) => {
			console.log('in get')
			db.find({}, (error, data) => {
				if (error) {
					console.log(error);
				} else{
					res.status(200).send(data);
				}
			})
	},
	post:(req, res) => {
			console.log('in post!')
			const task = req.body.task;
			new db({
				task
			}).save((error, data) => {
				if (error){
					console.log(error)
				} else {
					res.status(201).send(data);
				}
			})
	},
	delete: (req, res) => {
			console.log('in delete')
			const str = req.body.task;
			db.deleteOne({task: str}, (err, data) => {
				if (err){
					console.log(err);
				} else {
					res.status(202).send("deleted");  // 204 status code for delete request
				}
			})
	}
};