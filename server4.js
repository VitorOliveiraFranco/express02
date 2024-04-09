// exercicio simples com parametro

const express = require('express');
const app = express();

app.listen(3000, () => {

    console.log('Servidor em execução');
});

// dados dos clientes

const clientes = [

    {id: 1, nome: 'Altamiro', telefone: '111111111', email: 'alta@gmail.com'},
    {id: 2, nome: 'Beringenilda', telefone: '222222222', email: 'berin@gmail.com'},
    {id: 3, nome: 'Conegundes', telefone: '333333333', email: 'conen@gmail.com'},
    {id: 4, nome: 'Desiderio', telefone: '444444444', email: 'desi@gmail.com'},
    {id: 5, nome: 'Emengarda', telefone: '555555555', email: 'emen@gmail.com'}
];

//rotas

app.get('/', (req, res) => {
    res.send('API de clientes');
})

//rota com o total de clientes

app.get('/total_clientes', (req, res) => {
    res.send('O total de clientes ' + clientes.length);
})

//rotas para apresentar os dados de um cliente especifico

app.get('/clientes/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));

    //se não existir o cliente
    if(!cliente) res.status(404).send('Cliente não encontrado');

    //o cliente existe, 

    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.telefone}, e email: ${cliente.email}`);
});