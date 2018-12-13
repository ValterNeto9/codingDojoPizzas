const names = ['joao silva',
                'paulo coelho',
                'celso de araujo'];

const Renato = {'Marguerita':4, 'Quatro queijos': 5, 'Escarola': 4, 'Portuguesa': 5, 'Franco+Catupiry':4, 'Napolitana':3}               
const Marcelo = { 'Marguerita' : 2, 'Quatro queijos' : 2, 'Escarola' : 1, 'Portuguesa' : 3, 'Frango+Catupiry' : 5, 'Napolitana' : 2 }
const Lenon = { 'Marguerita' : 4, 'Quatro queijos' : 5, 'Escarola' : 2, 'Portuguesa' : 1, 'Frango+Catupiry' : 1, 'Napolitana' : 3 }
const Renata = { 'Marguerita' : 4, 'Quatro queijos' : 5, 'Escarola' : 1, 'Portuguesa' : 1, 'Frango+Catupiry' : 3, 'Napolitana' : 4 }
const Washington = { 'Marguerita' : 1, 'Quatro queijos' : 1, 'Escarola' : 2, 'Portuguesa' : 3, 'Frango+Catupiry' : 4, 'Napolitana' : 3 }
const Tino = { 'Marguerita' : 1, 'Quatro queijos' : 5, 'Escarola' : 1, 'Portuguesa' : 4, 'Frango+Catupiry' : 3, 'Napolitana' : 2 }
const Luca = { 'Marguerita' : 5, 'Quatro queijos' : 4, 'Escarola' : 3, 'Portuguesa' : 4, 'Frango+Catupiry' : 3, 'Napolitana' : 2 }

const pessoas = {Renato : Renato,  Marcelo : Marcelo, Lenon : Lenon, Renata : Renata, Washington : Washington, Tino : Tino, Luca : Luca}

function getPar( nome ) {
    /* let pessoa = pessoas[nome]

    pessoa

    pessoas.forEach(pessoa => {
        
    }); */

   return 'Renato';
}

function getCompatibilidades( _pessoa1, _pessoa2 ) {

    let pessoa = pessoas[_pessoa1];
    let pessoaComp = pessoas[_pessoa2];
    let comp = 0;

    for (var pizza in pessoa){
        if (pessoa[pizza] >= pessoaComp[pizza])
        comp ++;
        
    }
        
    return comp;
}

module.exports.getPar = getPar;
module.exports.getCompatibilidades = getCompatibilidades;