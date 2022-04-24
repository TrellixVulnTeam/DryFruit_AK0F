const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
//app.use(express.static(publicPath, '../public'));
//app.use('/static', express.static(__dirname, '..','public'));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, '../src/index.html'));
});


app.listen(port, () => {
   console.log('Server is up!');
});