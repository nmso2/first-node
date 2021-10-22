const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());

const port = 5000;

const users = [
    { id: 0, name: "subho", email: "subho@gmail.com", phone: "01762537288" },
    { id: 1, name: "nagib", email: "nagib@gmail.com", phone: "01762537288" },
    { id: 2, name: "mahfuz", email: "mahfuz@gmail.com", phone: "01762537288" },
    { id: 3, name: "shojib", email: "shojib@gmail.com", phone: "01762537288" },
    { id: 4, name: "joy", email: "joy@gmail.com", phone: "01762537288" },
    { id: 5, name: "zillu", email: "zillu@gmail.com", phone: "01762537288" }
]

app.get('/', (req, res) => {
    res.send('Hellooooooooooooooo World!')
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log("Example app listening at http://localhost: 5000")
})