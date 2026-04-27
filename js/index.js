let frases = [
    "Luke, eu sou seu pai! - Star Wars",
    "Vingadores, avante! - Vingadores Ultimato",
    "O que fazemos na vida ecoa na eternidade - Gladiador",
    "Wakanda para sempre! - Pantera Negra",
    "A felicidade pode ser encontrada mesmo nas horas mais difíceis, se você lembrar de acender a luz - Harry Potter",
    "As pessoas que são loucas o suficiente para pensar que podem mudar o mundo são as que o fazem - Jobs",
    "Às vezes, são pessoas das quais ninguém imagina nada que fazem coisas que ninguém pode imaginar - O Jogo da Imitação"
];

let clique = 0;

function gerarFrases() {
    let indice = Math.floor(Math.random() * frases.length);

    let fraseEscolhida = frases[indice];

    clique++;

    document.getElementById("frase").innerText = fraseEscolhida;

    document.getElementById("contador").innerText = "Frases geradas: " + clique;
}