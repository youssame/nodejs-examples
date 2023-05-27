/**
 * express : Framework for building servers
 * body-parser : Middleware that parses incoming requests
 * morgan : a middleware for logging incomming requests
 * @types/express : for types
 */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express(); // create app

// setup our middelwares
app.use(bodyParser.urlencoded({ extended: true })); // parse the query string and whatever in the URL 
app.use(bodyParser.json()); // This allows us to aprse json body
app.use(morgan('dev')); // type of loggin 

const DB: { [k: string]: string }[] = [];

app.post('/todo', (req, res) => {
    const newTodo = {
        id: Date.now().toString(),
        text: req.body.text
    }
    DB.push(newTodo);
    res
        .status(201)
        .json(newTodo);
});

app.get('/todo', (req, res) => {
    res.json(DB);
});

app.get('/todo/:id', (req, res) => {
    const todo = DB.find(todo => todo.id === req.params.id);
    if (!todo) res.status(404);
    res.json(todo);
});

app.listen(8000, () => {
    console.log(`Server on localhost:8000`);
});