let producao = 50;
let sustentabilidade = 50;
let rodada = 0;

const eventos = [
    {
        texto: "Como você vai irrigar a plantação?",
        opcoes: [
            { texto: "Usar irrigação inteligente", p: 5, s: 10 },
            { texto: "Usar água sem controle", p: 10, s: -15 }
        ]
    },
    {
        texto: "Como proteger o solo?",
        opcoes: [
            { texto: "Fazer rotação de culturas", p: 5, s: 10 },
            { texto: "Plantar sempre a mesma cultura", p: 10, s: -10 }
        ]
    },
    {
        texto: "O que fazer com a mata próxima ao rio?",
        opcoes: [
            { texto: "Preservar a mata ciliar", p: 0, s: 15 },
            { texto: "Desmatar para ampliar a produção", p: 15, s: -20 }
        ]
    },
    {
        texto: "Como controlar as pragas?",
        opcoes: [
            { texto: "Controle biológico", p: 5, s: 10 },
            { texto: "Uso excessivo de químicos", p: 10, s: -15 }
        ]
    },
    {
        texto: "Qual tecnologia utilizar?",
        opcoes: [
            { texto: "Agricultura de precisão", p: 10, s: 10 },
            { texto: "Métodos sem preocupação ambiental", p: 5, s: -10 }
        ]
    }
];

function carregar() {
    if (rodada >= eventos.length) {
        fim();
        return;
    }

    document.getElementById("rodada").textContent = rodada + 1;

    const evento = eventos[rodada];

    document.getElementById("cenario").textContent = evento.texto;
    document.getElementById("op1").textContent = evento.opcoes[0].texto;
    document.getElementById("op2").textContent = evento.opcoes[1].texto;
}

function escolha(opcao) {
    const e = eventos[rodada].opcoes[opcao];

    producao += e.p;
    sustentabilidade += e.s;

    document.getElementById("producao").textContent = producao;
    document.getElementById("sustentabilidade").textContent = sustentabilidade;

    rodada++;

    carregar();
}

function fim() {
    document.getElementById("cenario").style.display = "none";
    document.getElementById("op1").style.display = "none";
    document.getElementById("op2").style.display = "none";

    let mensagem;

    if (producao >= 60 && sustentabilidade >= 60) {
        mensagem = "🏆 Parabéns! Você mostrou que é possível produzir e preservar ao mesmo tempo!";
    } else {
        mensagem = "⚠️ Você concluiu o desafio, mas o ideal é equilibrar produção e sustentabilidade.";
    }

    document.getElementById("resultado").textContent = mensagem;
}

carregar();