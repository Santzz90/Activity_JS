// Event Listeners Globais
document.addEventListener('DOMContentLoaded', function() {
    // Botões de voltar
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    });

    // Botões com data-action
    const actionButtons = document.querySelectorAll('[data-action]');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            if (window[action] && typeof window[action] === 'function') {
                window[action]();
            }
        });
    });
});

// Variáveis globais para atividade 21
let filaEspera = []; // Vetor para nome e hora (hora, minutos e segundos) que pessoa entrou
let historicoCompleto = []; // Vetor para histórico completo conforme especificado

// index

const partes = [
{
    titulo: "Parte 1 – Declaração de Variáveis (let e const)",
    atividades: [
    "Declaração com let",
    "Uso de const",
    "Concatenação de Strings",
    "Diferença de Escopo"
    ]
},
{
    titulo: "Parte 2 – Estruturas Condicionais (if, else if, else e operador ternário)",
    atividades: [
    "Verificação de Idade",
    "Número Par ou Ímpar",
    "Nota de Aluno",
    "Operador Ternário"
    ]
},
{
    titulo: "Parte 3 – Laços de Repetição (for, while, for...in, for...of)",
    atividades: [
    "Tabuada com for",
    "Contagem Regressiva com while",
    "Percorrendo Objetos com for...in",
    "Percorrendo Arrays com for...of"
    ]
},
{
    titulo: "Parte 4 – Objetos",
    atividades: [
    "Criação de Objeto",
    "Método em Objeto",
    "Manipulação de Propriedades"
    ]
},
{
    titulo: "Parte 5 – Arrays com map, filter, sort",
    atividades: [
    "Dobrar Valores (map)",
    "Filtrar Números Pares (filter)",
    "Ordenação (sort)",
    "Encadeando Métodos",
    "Refazer"
    ]
},
{
    titulo: "Parte 6 – Controle de Fila de Atendimento",
    atividades: [
    "Atendimento"
    ]
}
];

const conteudo = document.getElementById("conteudo");

// Só executa o código do index se o elemento existir
if (conteudo) {
    let contador = 1;

    partes.forEach(parte => {
    // Título
    const h2 = document.createElement("h2");
    h2.textContent = parte.titulo;
    h2.className = "slide-in";
    conteudo.appendChild(h2);

// Botões
parte.atividades.forEach(atividade => {
    const numero = contador;
    const btn = document.createElement("button");
    btn.textContent = numero + ". " + atividade;
    btn.className = "btn btn-primary mb-3 fade-in";
    
    btn.onclick = () => {
    window.location.href = "Atividades/atividade" + numero + ".html";
    };

    conteudo.appendChild(btn);
    contador++;
});
});

}

// atividade1
// Função para calcular a idade em tempo real
function calcularIdade() {
    const idadeInput = document.getElementById('idadeInput').value;
    const resultado = document.getElementById('resultado');
    
    // Verificando se foi digitado um número válido
    if (idadeInput === '') {
        resultado.innerHTML = 'Digite sua idade para ver o resultado';
        resultado.style.color = '#666';
        return;
    }
    
    // Convertendo para número e validando
    let idade = parseFloat(idadeInput);
    
    if (isNaN(idade) || idade < 0 || idade > 150) {
        resultado.innerHTML = '❌ Digite uma idade válida entre 0 e 150 anos';
        resultado.style.color = '#d32f2f';
        return;
    }
    
    // Arredondando a idade para número inteiro se necessário
    idade = Math.round(idade);
    
    // Criando a variável let idade e atribuindo o valor validado
    let idadeAtual = idade;
    
    // Atribuindo um novo valor representando a idade daqui a 5 anos
    let idadeFutura = idade + 5;
    
    // Mostrando o resultado na tela e no console
    let mensagem = `Minha idade hoje é ${idadeAtual} e daqui a 5 anos será ${idadeFutura}`;
    resultado.innerHTML = mensagem;
    resultado.style.color = '#2c5530';
    
    console.log(mensagem);
}

// atividade2
function executarDemonstracao() {
    const resultadosDiv = document.getElementById('resultados');
    let logs = [];
    
    // Capturando logs para exibir na tela
    const originalLog = console.log;
    const originalError = console.error;
    
    console.log = function(...args) {
        const message = args.join(' ');
        logs.push(message);
        originalLog.apply(console, args);
    };
    
    console.error = function(...args) {
        const message = "❌ ERRO: " + args.join(' ');
        logs.push(message);
        originalError.apply(console, args);
    };
    
    console.log("=== ATIVIDADE 2: USO DE CONST ===");
    
    // PARTE A: Declare uma constante pi com valor 3.14159
    console.log("\n--- PARTE A ---");
    const pi = 3.14159;
    console.log(`pi declarado com valor: ${pi}`);
    
    // Tentativa de atribuir outro valor a pi
    console.log("Tentando atribuir novo valor a pi...");
    try {
        // Simulamos o erro, pois não podemos realmente reatribuir uma constante no mesmo escopo
        console.log("❌ Tentativa de reatribuição: pi = 3.14");
        throw new TypeError("Assignment to constant variable.");
    } catch (error) {
        console.error(error.message);
        console.log("Explicação: Constantes não podem ser reatribuídas após sua declaração.");
    }
    
    // PARTE B: Demonstração do erro de declaração sem valor
    console.log("\n--- PARTE B ---");
    console.log("Tentando declarar constante SemanasDoAno sem valor inicial...");
    console.log("❌ Esta declaração geraria erro de sintaxe!");
    console.log("Erro: Missing initializer in const declaration");
    console.log("Explicação: Constantes devem ser inicializadas no momento da declaração.");
    
    // Forma correta
    const SemanasDoAno = 52;
    console.log(`✅ Forma correta - SemanasDoAno: ${SemanasDoAno}`);
    
    // Restaurando console original
    console.log = originalLog;
    console.error = originalError;
    
    // Exibindo resultados na tela
    resultadosDiv.textContent = logs.join('\n');
}

// atividade3
// Função para gerar a apresentação com concatenação
function gerarApresentacao() {
    // Criando as três variáveis let conforme solicitado
    let nome = document.getElementById('nomeInput').value.trim();
    let sobrenome = document.getElementById('sobrenomeInput').value.trim();
    let anoNascimento = document.getElementById('anoInput').value;
    
    let resultado = document.getElementById('resultado');
    
    // Verificando se todos os campos estão preenchidos
    if (nome === '' || sobrenome === '' || anoNascimento === '') {
        resultado.innerHTML = 'Preencha todos os campos para ver o resultado';
        resultado.style.color = '#666';
        return;
    }
    
    // Validando ano de nascimento
    let ano = parseInt(anoNascimento);
    if (isNaN(ano) || ano < 1900 || ano > 2025) {
        resultado.innerHTML = '❌ Digite um ano válido entre 1900 e 2025';
        resultado.style.color = '#d32f2f';
        return;
    }
    
    // Concatenação do nome completo
    let nomeCompleto = nome + " " + sobrenome;
    
    // Frase conforme solicitado no exercício
    let frase = "Olá, meu nome é " + nomeCompleto + " e eu nasci em " + anoNascimento;
    
    // Exibindo o resultado
    resultado.innerHTML = frase;
    resultado.style.color = '#2c5530';
    
    // Mostrando no console conforme pedido
    console.log(frase);
}

// atividade4
function demonstrarEscopo() {
    const resultadoDiv = document.getElementById('resultados');
    let logs = [];
    
    // Capturando logs para exibir na tela
    const originalLog = console.log;
    console.log = function(...args) {
        const message = args.join(' ');
        logs.push(message);
        originalLog.apply(console, args);
    };
    
    // EXEMPLO CONFORME SOLICITADO NA ATIVIDADE
    console.log("=== ATIVIDADE 4: DIFERENÇA DE ESCOPO ===");
    
    // Declarando variável let numero = 10 FORA do bloco
    let numero = 10;
    console.log("Fora do bloco - numero:", numero);
    
    // Criando um bloco {}
    {
        // Dentro do bloco, declare novamente let numero = 20
        // Nota: não podemos acessar a variável externa 'numero' aqui devido ao Temporal Dead Zone
        let numero = 20;
        console.log("Dentro do bloco - numero:", numero);
    }
    
    console.log("Fora do bloco (após sair do bloco) - numero:", numero);
    
    // Restaurando console.log original
    console.log = originalLog;
    
    // Exibindo resultados na tela
    resultadoDiv.textContent = logs.join('\n');
}

// atividade5
// Função para verificação de idade
function verificarIdade() {
    const idadeInput = document.getElementById('idadeInput').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Verificar se o campo está vazio
    if (idadeInput === '') {
        resultadoDiv.textContent = 'Digite uma idade para ver a classificação';
        resultadoDiv.style.backgroundColor = '#f5f5f5';
        resultadoDiv.style.color = '#666';
        return;
    }
    
    // Converter para número e validar
    let idade = parseInt(idadeInput);
    
    if (isNaN(idade) || idade < 0) {
        resultadoDiv.textContent = '❌ Digite uma idade válida';
        resultadoDiv.style.backgroundColor = '#ffebee';
        resultadoDiv.style.color = '#d32f2f';
        return;
    }
    
    // Estrutura condicional conforme o exercício
    if (idade < 12) {
        resultadoDiv.textContent = 'Criança';
        resultadoDiv.style.backgroundColor = '#e8f5e8';
    } else if (idade >= 12 && idade <= 17) {
        resultadoDiv.textContent = 'Adolescente';
        resultadoDiv.style.backgroundColor = '#fff3cd';
    } else if (idade >= 18) {
        resultadoDiv.textContent = 'Adulto';
        resultadoDiv.style.backgroundColor = '#e3f2fd';
    }
    
    resultadoDiv.style.color = '#333';
}

// atividade6
// Função para verificar se o número é par ou ímpar
function verificarParImpar() {
    const numeroInput = document.getElementById('numeroInput').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Verificar se o campo está vazio
    if (numeroInput === '') {
        resultadoDiv.textContent = 'Digite um número para ver o resultado';
        resultadoDiv.style.backgroundColor = '#f5f5f5';
        resultadoDiv.style.color = '#666';
        return;
    }
    
    // Converter para número inteiro
    let numero = parseInt(numeroInput);
    
    // Validar se é um número válido
    if (isNaN(numero)) {
        resultadoDiv.textContent = '❌ Digite um número válido';
        resultadoDiv.style.backgroundColor = '#ffebee';
        resultadoDiv.style.color = '#d32f2f';
        return;
    }
    
    // Estrutura condicional if/else para verificar par ou ímpar
    if (numero % 2 === 0) {
        resultadoDiv.textContent = `O número ${numero} é Par`;
        resultadoDiv.style.backgroundColor = '#e8f5e8';
    } else {
        resultadoDiv.textContent = `O número ${numero} é Ímpar`;
        resultadoDiv.style.backgroundColor = '#ffebee';
    }
    
    resultadoDiv.style.color = '#333';
}

// atividade7
function verificarNota() {
    const notaInput = document.getElementById('notaInput').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Verificar se o campo está vazio
    if (notaInput === '') {
        resultadoDiv.textContent = 'Digite uma nota para ver o resultado';
        resultadoDiv.style.backgroundColor = '#f5f5f5';
        resultadoDiv.style.color = '#666';
        return;
    }
    
    // Converter para número e validar
    let nota = parseFloat(notaInput);
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultadoDiv.textContent = '❌ Digite uma nota válida entre 0 e 10';
        resultadoDiv.style.backgroundColor = '#ffebee';
        resultadoDiv.style.color = '#d32f2f';
        return;
    }
    
    // Estrutura condicional conforme o exercício
    if (nota >= 7) {
        resultadoDiv.textContent = 'Aprovado';
        resultadoDiv.style.backgroundColor = '#e8f5e8';
    } else if (nota >= 5 && nota < 7) {
        resultadoDiv.textContent = 'Recuperação';
        resultadoDiv.style.backgroundColor = '#fff3cd';
    } else if (nota < 5) {
        resultadoDiv.textContent = 'Reprovado';
        resultadoDiv.style.backgroundColor = '#ffebee';
    }
    
    resultadoDiv.style.color = '#333';
}

// atividade8
function verificarNumero() {
    const numeroInput = document.getElementById('numeroInput').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Verificar se o campo está vazio
    if (numeroInput === '') {
        resultadoDiv.textContent = 'Digite um número para ver o resultado';
        resultadoDiv.style.backgroundColor = '#f5f5f5';
        resultadoDiv.style.color = '#666';
        return;
    }
    
    // Converter para número
    let numero = parseFloat(numeroInput);
    
    if (isNaN(numero)) {
        resultadoDiv.textContent = '❌ Digite um número válido';
        resultadoDiv.style.backgroundColor = '#ffebee';
        resultadoDiv.style.color = '#d32f2f';
        return;
    }
    
    // Usando operador ternário conforme o exercício
    let resultado = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Zero";
    
    console.log(resultado); // Log no console conforme solicitado
    
    resultadoDiv.textContent = resultado;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
}

// atividade9
function gerarTabuada() {
    const numeroInput = document.getElementById('numeroInput').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Verificar se o campo está vazio
    if (numeroInput === '') {
        resultadoDiv.textContent = 'Digite um número para ver a tabuada';
        resultadoDiv.style.backgroundColor = '#f5f5f5';
        resultadoDiv.style.color = '#666';
        return;
    }
    
    // Converter para número
    let numero = parseInt(numeroInput);
    
    if (isNaN(numero)) {
        resultadoDiv.textContent = '❌ Digite um número válido';
        resultadoDiv.style.backgroundColor = '#ffebee';
        resultadoDiv.style.color = '#d32f2f';
        return;
    }
    
    // Gerar tabuada usando for conforme o exercício
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }
    
    resultadoDiv.textContent = tabuada;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade10
function iniciarContagem() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Contagem regressiva usando while conforme o exercício
    let contador = 10;
    let contagem = '';
    
    console.log('Iniciando contagem regressiva:');
    
    while (contador >= 1) {
        console.log(contador); // Log no console conforme solicitado
        contagem += contador + '\n';
        contador--;
    }
    
    resultadoDiv.textContent = contagem;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
    resultadoDiv.style.textAlign = 'center';
}

// atividade11
function percorrerObjeto() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Criar objeto pessoa conforme o exercício
    const pessoa = {
        nome: "João Silva",
        idade: 25,
        cidade: "São Paulo"
    };
    
    // Usar for...in para listar propriedades e valores
    let propriedades = '';
    
    for (let propriedade in pessoa) {
        propriedades += `${propriedade}: ${pessoa[propriedade]}\n`;
    }
    
    resultadoDiv.textContent = propriedades;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade12
function percorrerFrutas() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Criar array de frutas conforme o exercício
    const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
    
    // Usar for...of para percorrer o array
    let frutasList = '';
    console.log('Lista de frutas:');
    
    for (let fruta of frutas) {
        console.log(fruta); // Log no console conforme solicitado
        frutasList += fruta + '\n';
    }
    
    resultadoDiv.textContent = frutasList;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade13
function mostrarCarro() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Criar objeto carro conforme o exercício
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2022
    };
    
    // Mostrar cada propriedade usando console.log separado
    console.log(carro.marca);
    console.log(carro.modelo);
    console.log(carro.ano);
    
    // Mostrar na interface também
    let propriedades = '';
    propriedades += `marca: ${carro.marca}\n`;
    propriedades += `modelo: ${carro.modelo}\n`;
    propriedades += `ano: ${carro.ano}`;
    
    resultadoDiv.textContent = propriedades;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade14
function chamarMetodo() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Criar objeto carro com método descricao() conforme o exercício
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2022,
        descricao: function() {
            return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
        }
    };
    
    // Chamar o método e mostrar no console
    const descricaoTexto = carro.descricao();
    console.log(descricaoTexto);
    
    // Mostrar na interface também
    resultadoDiv.textContent = descricaoTexto;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
}

// atividade15
function manipularObjeto() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Criar objeto livro com título e autor
    let livro = {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis"
    };
    
    let steps = '';
    
    // Mostrar objeto inicial
    steps += 'Objeto inicial:\n';
    steps += JSON.stringify(livro, null, 2) + '\n\n';
    console.log('Objeto inicial:', livro);
    
    // Adicionar dinamicamente a propriedade ano
    livro.ano = 1899;
    steps += 'Após adicionar ano:\n';
    steps += JSON.stringify(livro, null, 2) + '\n\n';
    console.log('Após adicionar ano:', livro);
    
    // Alterar o título
    livro.titulo = "Dom Casmurro - Edição Revisada";
    steps += 'Após alterar título:\n';
    steps += JSON.stringify(livro, null, 2) + '\n\n';
    console.log('Após alterar título:', livro);
    
    // Excluir a propriedade autor
    delete livro.autor;
    steps += 'Após excluir autor:\n';
    steps += JSON.stringify(livro, null, 2);
    console.log('Objeto final (autor excluído):', livro);
    
    resultadoDiv.textContent = steps;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade16
function dobrarValores() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Array inicial conforme o exercício
    const arrayOriginal = [1, 2, 3, 4, 5];
    
    // Usar map para dobrar cada valor
    const arrayDobrado = arrayOriginal.map(numero => numero * 2);
    
    // Mostrar resultado
    let resultado = '';
    resultado += `Array original: [${arrayOriginal.join(', ')}]\n`;
    resultado += `Array dobrado: [${arrayDobrado.join(', ')}]`;
    
    console.log('Array original:', arrayOriginal);
    console.log('Array dobrado:', arrayDobrado);
    
    resultadoDiv.textContent = resultado;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade17
function filtrarPares() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Array inicial conforme o exercício
    const arrayOriginal = [10, 15, 20, 25, 30];
    
    // Usar filter para filtrar apenas números pares
    const arrayPares = arrayOriginal.filter(numero => numero % 2 === 0);
    
    // Mostrar resultado
    let resultado = '';
    resultado += `Array original: [${arrayOriginal.join(', ')}]\n`;
    resultado += `Números pares: [${arrayPares.join(', ')}]`;
    
    console.log('Array original:', arrayOriginal);
    console.log('Números pares:', arrayPares);
    
    resultadoDiv.textContent = resultado;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade18
function ordenarArray() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Array inicial conforme o exercício
    const arrayOriginal = [5, 1, 9, 3, 7];
    
    // Criar cópia para não modificar o original na exibição
    const arrayCopia = [...arrayOriginal];
    
    // Usar sort para ordenar em ordem crescente
    arrayCopia.sort((a, b) => a - b);
    
    // Mostrar resultado
    let resultado = '';
    resultado += `Array original: [${arrayOriginal.join(', ')}]\n`;
    resultado += `Array ordenado: [${arrayCopia.join(', ')}]`;
    
    console.log('Array original:', arrayOriginal);
    console.log('Array ordenado:', arrayCopia);
    
    resultadoDiv.textContent = resultado;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade19
function encadearMetodos() {
    const resultadoDiv = document.getElementById('resultado');
    
    // Array inicial conforme o exercício
    const arrayOriginal = [2, 5, 8, 11, 14];
    
    // Encadear filter e map
    const resultado = arrayOriginal
        .filter(numero => numero > 5)  // Filtrar números maiores que 5
        .map(numero => numero * 2);     // Multiplicar por 2
    
    // Mostrar resultado passo a passo
    const numerosMaioresQue5 = arrayOriginal.filter(numero => numero > 5);
    
    let resultadoTexto = '';
    resultadoTexto += `Array original: [${arrayOriginal.join(', ')}]\n`;
    resultadoTexto += `Após filter (> 5): [${numerosMaioresQue5.join(', ')}]\n`;
    resultadoTexto += `Após map (x2): [${resultado.join(', ')}]`;
    
    console.log('Array original:', arrayOriginal);
    console.log('Números maiores que 5:', numerosMaioresQue5);
    console.log('Resultado final (x2):', resultado);
    
    resultadoDiv.textContent = resultadoTexto;
    resultadoDiv.style.backgroundColor = '#e8f5e8';
    resultadoDiv.style.color = '#333';
    resultadoDiv.style.whiteSpace = 'pre-line';
}

// atividade20
// Esta atividade não tem script próprio pois é para refazer exercícios substituindo prompt por formulários

// atividade21
// Vetores para armazenar as informações conforme solicitado - agora declarados no início do arquivo

function entrarNaFila() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();
    
    if (nome === '') {
        alert('Digite um nome!');
        return;
    }
    
    // Usa Date.now() conforme solicitado
    const agora = Date.now();
    
    // Formata usando Intl.DateTimeFormat conforme solicitado
    const horaFormatada = new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(agora));
    
    const dataHoraCompleta = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(agora));
    
    // Adiciona no final da fila usando push() conforme solicitado
    filaEspera.push({
        nome: nome,
        horaEntrada: horaFormatada,
        timestampEntrada: agora
    });
    
    nomeInput.value = '';
    exibirDados();
}

function atenderPessoa() {
    if (filaEspera.length === 0) {
        alert('Não há ninguém na fila!');
        return;
    }
    
    // Remove do início da fila usando shift() conforme solicitado
    const pessoaAtendida = filaEspera.shift();
    
    const horaAtendimento = Date.now();
    const dataHoraAtendimento = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(horaAtendimento));
    
    // Calcula tempo de espera
    const tempoEsperaMs = horaAtendimento - pessoaAtendida.timestampEntrada;
    const tempoEsperaSeg = Math.floor(tempoEsperaMs / 1000);
    const minutos = Math.floor(tempoEsperaSeg / 60);
    const segundos = tempoEsperaSeg % 60;
    const tempoEspera = `${minutos}m ${segundos}s`;
    
    // Cria entrada no histórico conforme especificado
    historicoCompleto.push({
        nome: pessoaAtendida.nome,
        dataHoraEntrada: new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(new Date(pessoaAtendida.timestampEntrada)),
        dataHoraAtendimento: dataHoraAtendimento,
        tempoEspera: tempoEspera
    });
    
    exibirDados();
}

// Exibe dados dos dois vetores conforme solicitado
function exibirDados() {
    const resultadoDiv = document.getElementById('resultado');
    let texto = '';
    
    // Exibe fila de espera
    texto += 'FILA DE ESPERA:\n';
    if (filaEspera.length === 0) {
        texto += 'Nenhuma pessoa na fila\n';
    } else {
        filaEspera.forEach((pessoa, index) => {
            texto += `${index + 1}. ${pessoa.nome} - Entrada: ${pessoa.horaEntrada}\n`;
        });
    }
    
    texto += '\nHISTÓRICO DE ATENDIMENTOS:\n';
    if (historicoCompleto.length === 0) {
        texto += 'Nenhum atendimento realizado\n';
    } else {
        historicoCompleto.forEach((registro, index) => {
            texto += `${index + 1}. ${registro.nome}\n`;
            texto += `   Entrada: ${registro.dataHoraEntrada}\n`;
            texto += `   Atendimento: ${registro.dataHoraAtendimento}\n`;
            texto += `   Tempo de espera: ${registro.tempoEspera}\n\n`;
        });
    }
    
    resultadoDiv.textContent = texto;
}