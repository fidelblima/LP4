const Todo = require('./todo'); //registro do metodo Schema
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */





Todo.methods(['get', 'post', 'put', 'delete']); //registrando requisicoes

Todo.updateOptions({runValidators: true});


module.exports = Todo;