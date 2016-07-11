var Sequelize = require('sequelize');

var sequelize = new Sequelize('ficcion', 'root', '1234', {
		host : 'localhost',
		dialect : 'mysql'
	});
	
module.exports.conexion = sequelize;
module.exports.Seq = Sequelize;
  