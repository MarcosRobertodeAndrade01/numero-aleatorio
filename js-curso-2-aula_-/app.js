//Passo 1:
/*
let titulo = document.querySelector("h1");
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = 'Escolha um número entro 1 e 10';
*/

let listaDeNumerosSorteados = [];
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();


//Funçao por passagem de parametro
//Evitar repetição de códigoss com funções melhorando o código acima
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    /*Na linha 7 do código html,(<script src="https://code.responsivevoice.org/responsivevoice.js"></script>) existe um link que habilita a fala na pagina atraves do codigo javascript, para saber mais pesquise responsiveVoice no google
    */
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
/*
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entro 1 e 100');
*/

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entro 1 e 10');
}

exibirMensagemInicial();

//Função sem parametro e sem retorno
function verificarChute() {
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor!');
    }else{
        exibirTextoNaTela('p', 'O numero secreto é maior!');
    }
    tentativas++;
    limparCampo();
}

/*
//função com retorno
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}
*/

//Inserindo os números sorteados na lista (Array)
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    //O método includes verifica se o elemento esta na lista
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    /*
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entro 1 e 100');
    */
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}