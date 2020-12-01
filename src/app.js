const path = require('path')
const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
// require ('./db/mongoose')
// const Score = require('./models/score')

const app = express()

//Serve static files form the React app

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '..client/build', 'index.htnl'));
});

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server is up and running on ' +port)
})