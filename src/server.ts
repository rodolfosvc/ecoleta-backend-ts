import express from 'express';

const app = express();
app.use(express.json());

const users = [ 
    'user1',
    'user2',
    'user3'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    return response.json(users[id]);
});

app.post('/users', (request, response) => {
    const data = request.body;
    const user = { name: data.name, email: data.email };
    return response.json(user);
});

app.listen(3333);