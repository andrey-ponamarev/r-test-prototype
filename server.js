var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),

// Mongoose Schema definition
    Schema = new mongoose.Schema({
        id: String,
        title: String,
        completed: Boolean
    }),

    Todo = mongoose.model('Todo', Schema);

mongoose.connect('mongodb://roma:test54321@ds133428.mlab.com:33428/rtest', function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

express()
    .use(bodyParser.json())

    .use(bodyParser.urlencoded({extended: true}))

    .get('/api', function (req, res) {
        res.json(200, {msg: 'OK'});
    })
    .get('/api/todos', function (req, res) {
        Todo.find(function (err, todos) {
            res.json(200, todos);
        });
    })
    .post('/api/todos', function (req, res) {
        var todo = new Todo(req.body);
        todo.id = todo._id;
        todo.save(function (err) {
            res.json(200, todo);
        });
    })
    .del('/api/todos', function (req, res) {
        Todo.remove({completed: true}, function (err) {
            res.json(200, {msg: 'OK'});
        });
    })

    .get('/api/todos/:id', function (req, res) {
        Todo.findById(req.params.id, function (err, todo) {
            res.json(200, todo);
        });
    })

    .put('/api/todos/:id', function (req, res) {
        Todo.findById(req.params.id, function (err, todo) {
            todo.title = req.body.title;
            todo.completed = req.body.completed;
            todo.save(function (err, todo) {
                res.json(200, todo);
            });
        });
    })

    .del('/api/todos/:id', function (req, res) {
        Todo.findById(req.params.id, function (err, todo) {
            todo.remove(function (err, todo) {
                res.json(200, {msg: 'OK'});
            });
        });
    })

    .use(express.static(__dirname + '/'))
    .listen(process.env.PORT || 5000);
