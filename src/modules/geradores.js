const rand= (min ,max) => Math.floor(Math.random() * (max - min)+ min)
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinusculas = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = ',.;^~[]{}()_+=*&¨%$#@!'
const geraSimbolos = () => simbolos[rand(0, simbolos.length)]

// console.log(geraSimbolos());

export default function geraSenha(qtd,maiusculas,minusculas,numeros,simbolos){
    const senhaArray = [];
    qtd = Number(qtd)
    for (let i =0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinusculas())
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraSimbolos())
    }
    return (senhaArray.join('').slice(0,qtd))
}
