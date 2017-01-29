module.exports = function(app, db, client){

	app.get('/api/imgSearch/:search', function(req, res){
		var name = req.params.search
		var offset = req.query.offset ? req.query.offset : 1;
		var date = new Date();
		console.log(name + " " + offset)
		client.search(name, {
			page : offset
		}).then(function(images){
			console.log(images)
			var collect = db.collection('search_images')
			collect.insert([{term: name, when: date}],function(err, data){
				if(err) throw err
			})
            res.json(images)
		})
	})

	app.get('/api/latest/imagesearch/', function(req, res){
		var collect = db.collection('search_images')
		collect.find({
		},{
			term: 1,
			when : 1,
			_id: 0
		}).sort({
			_id: -1
		}).limit(10).toArray(function(err, document){
			if(err) throw err
			res.json(document)
		})
	})
}



