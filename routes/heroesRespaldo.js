var express = require('express');
var router = express.Router();
var heroe = require('.././db/heroe');


/* GET by ID. */
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	heroe.findById(id).then(function (heroe) {
		if (heroe != null){		
		res.status(200).jsonp(heroe);
		}else{
			res.status(404).jsonp({
			'mensaje' : 'el identificador no se encontro'
			});
		}
	}).catch (function (err) {
			res.status(500).jsonp({
				'mensaje' : err
			});
		});
});


/* GET ALL. */
router.get('/', function(req, res, next) {
	heroe.findAll().then(function (heroe) {
		res.status(200).jsonp(heroe);
	}).catch (function (err) {
			res.status(500).jsonp({
				'mensaje' : err
			});
		});
});



/* POST HEROE. */
router.post('/', function(req, res, next) {
	
	heroe.create(req.body).then(function(heroe) {
		res.status(200).jsonp(heroe);
	}).catch (function (err) {
		res.status(500).jsonp({
			'mensaje' : err
		});
	});

});


/* UPDATE HEROE. */
router.put('/:id', function(req, res, next) {
	
	var idH = req.params.id;
	var infoUpdate = req.body;
	
	heroe.update(infoUpdate,{where:{id:idH}}).then(function(heroe) {
		res.status(200).jsonp(heroe);
	}).catch (function (err) {
		res.status(500).jsonp({
			'mensaje' : err
		});
	});

});




/* DELETE HEROE. */
router.delete('/:id', function(req, res, next) {

	var idHero = req.params.id;

	console.log('DELETE\\HERO ID:'+idHero);
	heroe.destroy({			
		where : {id : idHero}
		}).then(function(heroe) {
		res.status(200).jsonp(heroe);
	}).catch (function (err) {
		res.status(500).jsonp({
			'mensaje' : err
		});
	});

});





module.exports = router;
