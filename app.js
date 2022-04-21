const express = require ('express');
const app = express ();
const path = require('path');

/*app.listen(3000,() =>
console.log('servidor corriendo')
);*/
const publicPath = './public';
app.use( express.static(publicPath));

// Ruta raiz

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname , '/views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.post('/', (req, res)=> {
    res.sendFile(path.join(__dirname , '/views/home.html'));
});
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando puerto: ' + process.env.PORT);
});