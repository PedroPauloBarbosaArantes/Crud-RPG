const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { 
    cadastrarPersonagem,
    listarPersonagens,
    buscarPersonagemPorId,
    atualizarNomePersonagem,
    removerPersonagem,
    cadastrarItemMagico,
    listarItensMagicos,
    buscarItemMagicoPorId,
    adicionarItemAoPersonagem,
    listarItensPorPersonagem,
    removerItemDoPersonagem,
    buscarAmuletoDoPersonagem
} = require('./index');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/personagens', (req, res) => {
    try {
        const { id, nomeJogador, nomePersonagem, classe, level, força, defesa } = req.body;
        const personagem = cadastrarPersonagem(id, nomeJogador, nomePersonagem, classe, level, força, defesa);
        res.status(201).json(personagem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/personagens', (req, res) => {
    const personagens = listarPersonagens();
    res.json(personagens);
});

app.get('/personagens/:id', (req, res) => {
    const personagem = buscarPersonagemPorId(req.params.id);
    if (personagem) {
        res.json(personagem);
    } else {
        res.status(404).json({ error: 'Personagem não encontrado' });
    }
});

app.put('/personagens/:id/nome', (req, res) => {
    try {
        const personagem = atualizarNomePersonagem(req.params.id, req.body.novoNome);
        if (personagem) {
            res.json(personagem);
        } else {
            res.status(404).json({ error: 'Personagem não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/personagens/:id', (req, res) => {
    const sucesso = removerPersonagem(req.params.id);
    if (sucesso) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Personagem não encontrado' });
    }
});

app.post('/itens', (req, res) => {
    try {
        const { id, nome, tipo, força, defesa } = req.body;
        const item = cadastrarItemMagico(id, nome, tipo, força, defesa);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/itens', (req, res) => {
    const itens = listarItensMagicos();
    res.json(itens);
});

app.get('/itens/:id', (req, res) => {
    const item = buscarItemMagicoPorId(req.params.id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item não encontrado' });
    }
});

app.post('/personagens/:personagemId/itens/:itemId', (req, res) => {
    try {
        const sucesso = adicionarItemAoPersonagem(req.params.personagemId, req.params.itemId);
        if (sucesso) {
            res.status(201).json({ message: 'Item adicionado com sucesso' });
        } else {
            res.status(404).json({ error: 'Personagem ou item não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/personagens/:personagemId/itens', (req, res) => {
    const itens = listarItensPorPersonagem(req.params.personagemId);
    res.json(itens);
});

app.delete('/personagens/:personagemId/itens/:itemId', (req, res) => {
    const sucesso = removerItemDoPersonagem(req.params.personagemId, req.params.itemId);
    if (sucesso) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Personagem ou item não encontrado' });
    }
});

app.get('/personagens/:personagemId/amuleto', (req, res) => {
    const amuleto = buscarAmuletoDoPersonagem(req.params.personagemId);
    if (amuleto) {
        res.json(amuleto);
    } else {
        res.status(404).json({ error: 'Amuleto não encontrado' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}); 