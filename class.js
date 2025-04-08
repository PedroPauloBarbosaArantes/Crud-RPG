class Personagem {
    id='';
    nomeJogador= '';
    nomePersonagem='';
    classe='';
    level='';
    listaItensMagicos;
    força='';
    defesa='';
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
    id='';
    nome='';
    tipo='';
    if(tipo = 'Arma'){
        força = ''
        defesa = 0
    }
    if(tipo = 'Armadura'){
        força = 0
        defesa = ''
    }

}

