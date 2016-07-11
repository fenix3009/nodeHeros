var heroe = require('./heroe');

/* GET by ID. */
var getHeroByID = function (req, res, next) {

    var id = req.params.id;

    console.log('GET BY ID:' + id);
    heroe.findById(id).then(function (heroe) {
        if (heroe !== null) {
            res.status(200).jsonp(heroe);
        } else {
            res.status(404).jsonp({
                'mensaje': 'el identificador no se encontro'
            });
        }
    }).catch(function (err) {
        res.status(500).jsonp({
            'mensaje': err
        });
    });
};


/* GET ALL. */
var getAllHeroes = function (req, res, next) {
    console.log('GET ALL');
    heroe.findAll().then(function (heroe) {
        res.status(200).jsonp(heroe);
    }).catch(function (err) {
        res.status(500).jsonp({
            'mensaje': err
        });
    });
};



/* POST HEROE. */
var addHero = function (req, res, next) {

    console.log('ADD HERO\n' + req.body);
    heroe.create(req.body).then(function (heroe) {
        res.status(200).jsonp(heroe);
    }).catch(function (err) {
        res.status(500).jsonp({
            'mensaje': err
        });
    });

};


/* UPDATE HEROE. */
var updateHero = function (req, res, next) {

    var idH = req.params.id;
    var infoUpdate = req.body;
    console.log('UPDATE HERO ID:' + idH);
    heroe.update(infoUpdate, {where: {id: idH}}).then(function (heroe) {
        res.status(200).jsonp(heroe);
    }).catch(function (err) {
        res.status(500).jsonp({
            'mensaje': err
        });
    });

};




/* DELETE HEROE. */
var deleteHero = function (req, res, next) {

    var idHero = req.params.id;

    console.log('DELETE\\HERO ID:' + idHero);
    heroe.destroy({
        where: {id: idHero}
    }).then(function (heroe) {
        res.status(200).jsonp(heroe);
    }).catch(function (err) {
        res.status(500).jsonp({
            'mensaje': err
        });
    });

};


module.exports.getHeroByID = getHeroByID;
module.exports.getAllHeroes = getAllHeroes;
module.exports.addHero = addHero;
module.exports.updateHero = updateHero;
module.exports.deleteHero = deleteHero;