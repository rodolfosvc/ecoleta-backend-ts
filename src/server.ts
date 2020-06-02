import express from 'express';

const app = express();
const users = [ 
    'user1',
    'user2',
    'user3'
];

app.get('/users', (request, response) => {
    return response.json(users);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    return response.json(users[id]);
});

app.post('/users', (request, response) => {
    const user = { name: 'TestUser', email: 'testuser@mail.com' };
    return response.json(user);
});

app.listen(3333);