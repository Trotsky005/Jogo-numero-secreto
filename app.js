let listaDeNumeroSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
mensagemInicial ();

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Parabéns!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descubriu o número secreto em ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
        exibirTextoNaTela('p',`O número secreto é MENOR que ${chute}`);
        } else{
        exibirTextoNaTela('p',`O número secreto é MAIOR que ${chute}`);
        }
        tentativa++
        limparCampo();
        }
    
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumeroSorteados.length;

    if (quantidadeDeElementos == numeroLimite) {
        listaDeNumeroSorteados = [];
    }
    
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}