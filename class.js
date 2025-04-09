class Personagem {
    constructor(id, nomeJogador, nomePersonagem, classe, level, força, defesa) {
        if (força + defesa !== 10) {
            throw new Error("A soma de força e defesa deve ser igual a 10");
        }
        
        if (!['Guerreiro', 'Mago', 'Arqueiro', 'Ladino', 'Bardo'].includes(classe)) {
            throw new Error("Classe inválida");
        }

        this.id = id;
        this.nomeJogador = nomeJogador;
        this.nomePersonagem = nomePersonagem;
        this.classe = classe;
        this.level = level;
        this.força = força;
        this.defesa = defesa;
        this.listaItensMagicos = [];
    }

    getForçaTotal() {
        return this.força + this.listaItensMagicos.reduce((total, item) => total + item.força, 0);
    }

    getDefesaTotal() {
        return this.defesa + this.listaItensMagicos.reduce((total, item) => total + item.defesa, 0);
    }

    adicionarItemMagico(item) {
        if (item.tipo === 'Amuleto' && this.listaItensMagicos.some(i => i.tipo === 'Amuleto')) {
            throw new Error("O personagem já possui um amuleto");
        }
        this.listaItensMagicos.push(item);
    }

    removerItemMagico(itemId) {
        this.listaItensMagicos = this.listaItensMagicos.filter(item => item.id !== itemId);
    }

    getAmuleto() {
        return this.listaItensMagicos.find(item => item.tipo === 'Amuleto');
    }

    ataque(){
        if(this.defesa<this.força){
            console.log("você acertou o ataque")
        }else{
            console.log("você errou")
        }    
    }
    defesa(){
        if(this.defesa>this.ataque){
            console.log("você defendeu")
        }else{
            console.log("você não conseguiu defender")
        }
    }
};

class ItemMagico {
    constructor(id, nome, tipo, força, defesa) {
        if (!['Arma', 'Armadura', 'Amuleto'].includes(tipo)) {
            throw new Error("Tipo de item inválido");
        }

        if (tipo === 'Arma' && defesa !== 0) {
            throw new Error("Arma deve ter defesa igual a 0");
        }

        if (tipo === 'Armadura' && força !== 0) {
            throw new Error("Armadura deve ter força igual a 0");
        }

        if (força < 0 || força > 10 || defesa < 0 || defesa > 10) {
            throw new Error("Força e defesa devem estar entre 0 e 10");
        }

        if (força === 0 && defesa === 0) {
            throw new Error("Item não pode ter força e defesa iguais a 0");
        }

        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.força = força;
        this.defesa = defesa;
    }
}

module.exports = { Personagem, ItemMagico };

