module.exports = function(app){

	var musicians = require('./controllers/musicians');

	app.get('/', musicians.indexPage);
    app.get('/musicians/:name?', musicians.findByName);
    app.get('/allmusicians', musicians.findAll);

    app.post('/musicians', musicians.add);
    app.put('/musicians/:id', musicians.update);
    app.delete('/musicians/:id', musicians.delete);
    app.get('/import', musicians.import);

}
