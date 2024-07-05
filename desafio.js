// Definindo as variáveis para armazenar o nome e a experiência do herói
let Heroi = "Homem Aranha";
let experiencia = 1230;

let nivelDoHeroi = "";


if (experiencia < 1000) {
    nivelDoHeroi = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivelDoHeroi = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivelDoHeroi = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivelDoHeroi = "Imortal";
} else if (experiencia >= 10001) {
    nivelDoHeroi = "Radiante";
}

console.log(`Esse Herói: \n${Heroi}, está no nível de ${nivelDoHeroi}`);
