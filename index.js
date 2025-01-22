const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/findsum', (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let sum = parseInt(num1) + parseInt(num2);
    res.send(`Sum of ${num1} and ${num2} is ${sum}`);
    }
);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);