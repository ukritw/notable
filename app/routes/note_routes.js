var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

	app.get('/', (req, res) => {
	  res.send("Hello World!")
	})

	// // READ all notes
	// app.get('/notes', (req, res) => {
	// 	db.collection('notes').find().sort({title: 1}).toArray((err, result) => {

	// 	if (err) {
	// 		res.send({'error':'An error has occurred'});
	// 	} else {
	// 		res.send(result);
	// 	} 

	// 	});
	// });

	// // READ a note by Id
	// app.get('/notes/:id', (req, res) => {
	// 	const id = req.params.id;
	// 	const details = { '_id': new ObjectID(id) };
	// 	db.collection('notes').findOne(details, (err, item) => {
	// 		if (err) {
	// 			res.send({'error':'An error has occurred'});
	// 		} else {
	// 			res.send(item);
	// 		} 
	// 	});
	// });

	// // CREATE
	// app.post('/notes', (req, res) => {
	// 	const note = { text: req.body.text, title: req.body.title };
	// 	db.collection('notes').insert(note, (err, result) => {
	// 		if (err) { 
	// 			res.send({ 'error': 'An error has occurred' }); 
	// 		} else {
	// 			res.send(result.ops[0]);
	// 		}
	// 	});
	// });

	// // DELETE
	// app.delete('/notes/:id', (req, res) => {
	// 	const id = req.params.id;
	// 	const details = { '_id': new ObjectID(id) };
	// 	db.collection('notes').remove(details, (err, item) => {
	// 		if (err) {
	// 			res.send({'error':'An error has occurred'});
	// 		} else {
	// 			res.send('Note ' + id + ' deleted!');
	// 		} 
	// 	});
	// });

	// // UPDATE
	// // app.put('/notes/:id', (req, res) => {
	// // 	const id = req.params.id;
	// // 	const details = { '_id': new ObjectID(id) };
	// // 	const note = { text: req.body.body, title: req.body.title };
	// // 	db.collection('notes').update(details, {$set: note}, (err, result) => {
	// // 		if (err) {
	// // 			res.send({'error':'An error has occurred'});
	// // 		} else {
	// // 			res.send(note);
	// // 		} 
	// // 	});
	// // });

	// // UPDATE condionally
	// app.put('/notes/:id', (req, res) => {
	// 	const id = req.params.id;
	// 	const details = { '_id': new ObjectID(id) };
	// 	const note = req.body;
	// 	db.collection('notes').update(details, {$set: note}, (err, result) => {
	// 		if (err) {
	// 			res.send({'error':'An error has occurred'});
	// 		} else {
	// 			res.send(note);
	// 		} 
	// 	});
	// });


	//db.getCollection('notes').update({_id: ObjectId("59ca2356618206044cd908dc")},{$set: {"title" : "supernewtitle"}})
};
