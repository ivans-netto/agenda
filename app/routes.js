/*global require, console, module*/
'use strict';

var Todo = require('./models/agenda');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error, send the error.
        // nothing after res.send(err) will happens
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all agenda todos inside JSON
    });
}

module.exports = function (app) {

    // get all agenda todos
    app.get('/api/todos', function (req, res) {
        getTodos(res);
    });

    // create todo and after send back all agenda todos
    app.post('/api/todos', function (req, res) {
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all agenda todos
            getTodos(res);
        });
    });

    // delete an agenda todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    // update an agenda todo
    app.put('/api/todos/:todo_id', function (req, res) {
        Todo.update({
            _id: req.params.todo_id,
        }, {
            text: req.body.text
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all agenda todos
            getTodos(res);
        });
    });

    // front-end app
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
