var express = require('express');
var router = express.Router();
var heroe = require('.././db/querys');


/* TODA LAS RUTAS NECESITAN UN ID
 * GET ByID
 * PUT UPDATE HERO
 * DELETE HERO */
router.route('/:id').get(heroe.getHeroByID)
			  .put(heroe.updateHero)
			  .delete(heroe.deleteHero);


/* NO REQUIERE UN PARAMETRO DE ENTRADA
 * GET ALL.
 * POST HERO */
router.route('/').get(heroe.getAllHeroes)
	  .post(heroe.addHero);


module.exports = router;
