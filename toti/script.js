
function Pessoa(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
}

var pessoa1 = new Pessoa("Alice", 30, 1.65);
console.log(pessoa1); 
var pessoas = [];


function registrarPessoas() {
    while (true) {
        var nome = prompt("Digite o nome:");
        var idade = parseInt(prompt("Digite a idade:"));
        var altura = parseFloat(prompt("Digite a altura (em metros):"));

        var pessoa = new Pessoa(nome, idade, altura);
        pessoas.push(pessoa);

        var continuar = confirm("Deseja adicionar outra pessoa?");
        if (!continuar) {
            break;
        }
    }

    console.log("Registros concluídos. Pessoas cadastradas:");
    console.log(pessoas);

    realizarComparacoes();
}

registrarPessoas();

function encontrarPessoaMaisVelha() {
    var maisVelha = pessoas[0];
    for (var i = 1; i < pessoas.length; i++) {
        if (pessoas[i].idade > maisVelha.idade) {
            maisVelha = pessoas[i];
        }
    }
    console.log("A pessoa mais velha é:", maisVelha.nome, "com", maisVelha.idade, "anos.");
}


function calcularAlturaMedia() {
    var somaAlturas = 0;
    for (var i = 0; i < pessoas.length; i++) {
        somaAlturas += pessoas[i].altura;
    }
    var alturaMedia = somaAlturas / pessoas.length;
    console.log("A altura média é:", alturaMedia.toFixed(2), "metros.");
}

function realizarComparacoes() {
    encontrarPessoaMaisVelha();
    calcularAlturaMedia();
}


registrarPessoas();

