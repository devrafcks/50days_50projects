const quizData = [
    {
        question: "Quem é o pai de Luke Skywalker?",
        a: "Obi-Wan Kenobi",
        b: "Han Solo",
        c: "Anakin Skywalker",
        d: "Yoda",
        correct: "c",
    },
    {
        question: "Qual o nome do planeta natal de Chewbacca?",
        a: "Kashyyyk",
        b: "Tatooine",
        c: "Endor",
        d: "Naboo",
        correct: "a",
    },
    {
        question: "Quem treinou Anakin Skywalker como Jedi?",
        a: "Mace Windu",
        b: "Obi-Wan Kenobi",
        c: "Qui-Gon Jinn",
        d: "Yoda",
        correct: "b",
    },
    {
        question: "Qual o verdadeiro nome do Imperador Palpatine?",
        a: "Darth Plagueis",
        b: "Darth Vader",
        c: "Darth Sidious",
        d: "Conde Dookan",
        correct: "c",
    },
    {
        question: "Quem disse a frase: 'Que a Força esteja com você' pela primeira vez nos filmes?",
        a: "Luke Skywalker",
        b: "Obi-Wan Kenobi",
        c: "Han Solo",
        d: "General Dodonna",
        correct: "d",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

carregarQuiz()

function carregarQuiz() {
    desmarcarRespostas()

    const quizAtual = quizData[currentQuiz]

    questionEl.innerText = quizAtual.question
    a_text.innerText = quizAtual.a
    b_text.innerText = quizAtual.b
    c_text.innerText = quizAtual.c
    d_text.innerText = quizAtual.d
}

function desmarcarRespostas() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function obterRespostaSelecionada() {
    let resposta

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            resposta = answerEl.id
        }
    })

    return resposta
}

submitBtn.addEventListener('click', () => {
    const resposta = obterRespostaSelecionada()

    if (resposta) {
        if (resposta === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            carregarQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score} de ${quizData.length} perguntas!</h2>
                <button onclick="location.reload()">Recomeçar Quiz</button>
            `
        }
    }
})
