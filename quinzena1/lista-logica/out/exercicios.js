// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
     const altura = Number(prompt("Digite a altura"))
     const largura = Number(prompt("Digite a largura"))
    
     console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

  const anoAtual = Number(prompt("Digite o ano atual"))
  const idade = Number(prompt("Digite sua idade"))

  console.log(anoAtual-idade)

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
     const peso = float(prompt("Digite seu peso"))
     const altura = float(prompt("Digite sua altura"))

     console.log(peso / altura)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  const cor1 = prompt("Digite a cor 1")
  const cor2 = prompt("Digite a cor 2")
  const cor3 = prompt("Digite a cor 3")

  console.log([cor1, cor2, cor3])

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  const palavra = prompt("Digite uma palavra")

  console.log(palavra.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custo = Number(prompt("Qual o valor do ingresso?"))
let valor = Number(prompt("Qual a quantidade de lugares?"))

console.log(custo / valor)
}


// Exercício 8
function checaStringsMesmoTamanho() {
  const str1 = prompt("Escreva uma palavra")
  const str2 = prompt("Escreva outra palavra")

  console.log(str1.length === str2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let frase1 = prompt('Digite uma frase:')
  let frase2 = prompt('Digite outra frase para conferir se é igual a primeira:')

  let comparacao = frase1.toLocaleUpperCase() === frase2.toLocaleUpperCase()

  console.log(comparacao)

}

// Exercício 10
function checaRenovacaoRG() {
  let anoAtual = Number(prompt('Digite o ano atual: '))
  let anoNasc = Number(prompt('Digite seu ano de nascimento: '))
  let anoIdentidade = Number(prompt("Digite o ano de emissão da sua carteira de identidade: "))

  let idade = anoAtual - anoNasc
  let validadeIdentidade = anoAtual - anoIdentidade

  let faixaEtaria1 = idade <= 20 && validadeIdentidade >= 5
  let faixaEtaria2 = idade >= 20 && idade <= 50 &&  validadeIdentidade >= 10
  let faixaEtaria3 = idade > 50 && validadeIdentidade >= 15

  console.log(faixaEtaria1 || faixaEtaria2 || faixaEtaria3)


}

// Exercício 11
function checaAnoBissexto() {
  const checagemAno = prompt("Digite um ano")

  bissexto1 = (checagemAno % 400) == 0
  bissexto2 = ((checagemAno % 4 == 0) && (checagemAno % 100 != 0))
  bissextoNao = checagemAno && bissexto1 && bissexto2

console.log (bissextoNao || bissexto1 || bissexto2)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  let idade = (prompt("Você tem mais de 18 anos? (sim / não"))
let escolaridade = prompt("Você possui ensino médio completo?(sim /nao)")
let horarios = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

let respostas = idade === "sim" && escolaridade === "sim" && horarios === "sim"

console.log(respostas)

}