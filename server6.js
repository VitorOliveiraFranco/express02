//incorporar respostas a partir de outros arquivo

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor na área bro');
});

const funcoes = require('./functions.js');

app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const resultado = funcoes.add(a, b)

    res.send(`A soma de ${a} e ${b} é igual a ${resultado}`);
    
});

app.get('/sub/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const resultado = funcoes.sub(a, b); 

    res.send(`A subtração de ${a} e ${b} é igual a ${resultado}`);
    
});

app.get('/multi/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const resultado = funcoes.multi(a, b); 

    res.send(`A multiplicação de ${a} e ${b} é igual a ${resultado}`);
    
});

app.get('/divi/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const resultado = funcoes.divi(a, b); 

    res.send(`A divisão de ${a} e ${b} é igual a ${resultado}`);
    
});