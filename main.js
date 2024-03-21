const form = document.getElementById('formulario atividade')
const imgAprovado = `<img src="/images/aprovado.png" alt="emoji feliz"/>`;
const imgReprovado = `<img src="/images/reprovado.png" alt="emoji triste"/>`;
const atividades = [];
const notas = [];
const spamAprovado = '<spam class="resultado aprovado">Aprovado</spam>'
const spamReprovado = '<spam class="resultado reprovado">Reprovado</spam>'
const notaMinima = parseFloat(prompt('Digite a nota minima'))

let linhas = ' '


form.addEventListener('submit', function(e){
    e.preventDefault(); 

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const inputnomeDaAtividade = document.getElementById('nomeAtividade')
    const inputnotaDaAtividade = document.getElementById('notaAtividade')

    if (atividades.includes(inputnomeDaAtividade.value)) {
        alert(`a atividade: ${inputnomeDaAtividade.value} já foi inserida.`)
    }

    atividades.push(inputnomeDaAtividade.value);
    notas.push(parseFloat(inputnotaDaAtividade.value));

    let linha = '<tr>'; //+= é a mesma coisa que linha = linha + 'outra coisa'
    linha += `<td>${inputnomeDaAtividade.value}</td>`;
    linha += `<td>${inputnotaDaAtividade.value}</td>`;
    linha += `<td>${inputnotaDaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; //? represente o if e : o else.
    linha += `</tr>`;

    linhas += linha //para criar uma nova linha toda vez que ser submit

    inputnomeDaAtividade.value = '';
    inputnotaDaAtividade.value = '';// Assim que o submit por executado, os espaços serão resetados.
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}

function atualizaMediaFinal (){
    const mediaFinal = calculaMediaFinal();
    
        document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2);
        document.getElementById('mediafinalresultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado

}

function calculaMediaFinal(){

    let somaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    } 

    const media = somaDasNotas / notas.length

    return somaDasNotas / notas.length
}