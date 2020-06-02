import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json([ 
        'user1',
        'user2',
        'user3'
    ]);
});

app.post('/users', (request, response) => {
    const user = { name: 'TestUser', email: 'testuser@mail.com' };
    return response.json(user);
});

app.listen(3333);