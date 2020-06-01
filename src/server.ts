import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([ 
        'user1',
        'user2',
        'user4'
    ]);
});

app.listen(3333);