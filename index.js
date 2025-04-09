const { Personagem, ItemMagico } = require('./class');

const personagens = new Map();

const itensMagicos = new Map();

function cadastrarPersonagem(id, nomeJogador, nomePersonagem, classe, level, força, defesa) {
    const personagem = new Personagem(id, nomeJogador, nomePersonagem, classe, level, força, defesa);
    personagens.set(id, personagem);
    return personagem;
}

function listarPersonagens() {
    return Array.from(personagens.values());
}

function buscarPersonagemPorId(id) {
    return personagens.get(id);
}

function atualizarNomePersonagem(id, novoNome) {
    const personagem = personagens.get(id);
    if (personagem) {
        personagem.nomePersonagem = novoNome;
        return personagem;
    }
    return null;
}

function removerPersonagem(id) {
    return personagens.delete(id);
}

function cadastrarItemMagico(id, nome, tipo, força, defesa) {
    const item = new ItemMagico(id, nome, tipo, força, defesa);
    itensMagicos.set(id, item);
    return item;
}

function listarItensMagicos() {
    return Array.from(itensMagicos.values());
}

function buscarItemMagicoPorId(id) {
    return itensMagicos.get(id);
}

function adicionarItemAoPersonagem(personagemId, itemId) {
    const personagem = personagens.get(personagemId);
    const item = itensMagicos.get(itemId);
    
    if (personagem && item) {
        personagem.adicionarItemMagico(item);
        return true;
    }
    return false;
}

function listarItensPorPersonagem(personagemId) {
    const personagem = personagens.get(personagemId);
    return personagem ? personagem.listaItensMagicos : [];
}

function removerItemDoPersonagem(personagemId, itemId) {
    const personagem = personagens.get(personagemId);
    if (personagem) {
        personagem.removerItemMagico(itemId);
        return true;
    }
    return false;
}

function buscarAmuletoDoPersonagem(personagemId) {
    const personagem = personagens.get(personagemId);
    return personagem ? personagem.getAmuleto() : null;
}

module.exports = {
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
}; 
