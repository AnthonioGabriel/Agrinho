let producao = 50;
let sustentabilidade = 50;
let rodada = 0;

const eventos = [
    {
        texto: "Sua fazenda precisa melhorar a irrigação. O que você faz?",
        opcoes: [
            { texto: "Instalar irrigação inteligente", p: 5, s: 10 },
            { texto: "Continuar usando muita água sem controle", p: 10, s: -15 }
        ]
    },
    {
        texto: "Como você vai cuidar do solo?",
        opcoes: [
            { texto: "Fazer rotação de culturas", p: 5, s: 10 },
            { texto: "Plantar sempre a mesma cultura", p: 10, s: -10 }
        ]
    },
    {
        texto: "Há uma área de mata próxima ao rio. O que fazer?",
        opcoes: [
            { texto: "Preservar a mata ciliar", p: 0, s: 15 },
            { texto: "Desmatar para expandir a produção", p: 15, s: -20 }
        ]
    },
    {
        texto: "Como controlar as pragas da plantação?",
        opcoes: [
            { texto: "Usar controle biológico", p: 5, s: 10 },
            { texto: "Aplicar químicos em excesso", p: 10, s: -15 }
        ]
    },
    {
        texto: "Você recebeu recursos para investir. Qual será sua escolha?",
        opcoes: [
            { texto: "Adotar agricultura de precisão", p: 10, s: 10 },
            { texto: "Ignorar práticas sustentáveis", p: 5, s: -10 }
        ]
    }
];

function atualizarTela() {
    document.getElementById("producao").textContent = producao;
    document.getElementById("sustentabilidade").textContent = sustentabilidade;

    document.getElementById("barraProducao").value = producao;
    document.getElementById("barraSustentabilidade").value = sustentabilidade;
}

function carregar() {
    if (rodada >= eventos.length) {
        finalizarJogo();
        return;
    }

    document.getElementById("rodada").textContent = rodada + 1;

    const evento = eventos[rodada];

    document.getElementById("cenario").textContent = evento.texto;
    document.getElementById("op1").textContent = evento.opcoes[0].texto;
    document.getElementById("op2").textContent = evento.opcoes[1].texto;
}

function escolha(opcao) {
    const decisao = eventos[rodada].opcoes[opcao];

    producao += decisao.p;
    sustentabilidade += decisao.s;

    producao = Math.max(0, Math.min(100, producao));
    sustentabilidade = Math.max(0, Math.min(100, sustentabilidade));

    atualizarTela();

    rodada++;
    carregar();
}

function finalizarJogo() {
    document.getElementById("cenario").style.display = "none";
    document.getElementById("op1").style.display = "none";
    document.getElementById("op2").style.display = "none";

    let resultado = "";

    if (producao >= 60 && sustentabilidade >= 60) {
        resultado =
            "🏆 PRODUTOR DO FUTURO! Você conseguiu equilibrar produção e preservação ambiental.";
    } else if (sustentabilidade > producao) {
        resultado =
            "🌳 GUARDIÃO DA NATUREZA! Você priorizou o meio ambiente, mas poderia aumentar a produtividade.";
    } else {
        resultado =
            "🚜 EXPLORADOR DO SOLO! Sua produção cresceu, mas faltou investir em sustentabilidade.";
    }

    document.getElementById("resultado").textContent = resultado;

    document.getElementById("reiniciar").style.display = "block";
}

atualizarTela();
carregar();