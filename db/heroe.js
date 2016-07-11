var conn = require('./conexion');


var sequelize = conn.conexion;
sequelize
        .authenticate()
        .then(function (err) {
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });


var Heroe = sequelize.define('heroe', {
    id: {
        type: conn.Seq.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_Real: conn.Seq.STRING,
    nombre_Heroe: conn.Seq.STRING
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Heroe;


