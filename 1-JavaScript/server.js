const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello Nhat'
    })
})
app.listen(3000, () => {
    console.log('Hello world!');
})