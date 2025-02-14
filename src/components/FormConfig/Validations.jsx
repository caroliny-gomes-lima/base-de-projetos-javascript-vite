import { Texts } from "../../config";

//HINT 6
function checkRulesPassword(rules, password) {
  const passwordRules = ["special", "upperase", "lowercase", "number"];
  switch (rules) {
    case passwordRules[0]:
      return /\W|_/g.test(password) ? 1 : 0;
    case passwordRules[1]:
      return /[A-Z]/g.test(password) ? 1 : 0;
    case passwordRules[2]:
      return /[a-zç]/g.test(password) ? 1 : 0;
    case passwordRules[3]:
      return /\d/g.test(password) ? 1 : 0;
    default:
      return 0;
  }
}

// HINT 1
function validPassword(password) {
  const text = Texts["ptBr"].password;

  if (password.length < 8) {
    return text.errorMessages.passwordSize;
  }

  // HINT 2
  for (let i = 0; i < password.length - 3; i++) {
    const charCode = password.charCodeAt(i); // HINT 3
    if (
      // HINT 4
      charCode === password.charCodeAt(i + 1) - 1 &&
      charCode === password.charCodeAt(i + 2) - 2 &&
      charCode === password.charCodeAt(i + 3) - 3
    ) {
      return text.errorMessages.ascendingOrder;
    } else if (
      //HINT 5
      charCode === password.charCodeAt(i + 1) + 1 &&
      charCode === password.charCodeAt(i + 2) + 2 &&
      charCode === password.charCodeAt(i + 3) + 3
    ) {
      return text.errorMessages.decreasingOrder;
    }
  }

  //HINT 7
  const rules = ["special", "upperase", "lowercase", "number"];
  //HINT 8
  const rulesCount = rules.reduce(
    (acumulator, rule) => acumulator + checkRulesPassword(rule, password),
    0
  );
  if (rulesCount < 3) {
    return text.errorMessages.passwordRules;
  }
}

const validations = {
  validPassword,
};

export default validations;

/* 
1 - Função de validação de senha: A função recebe uma string de senha como argumento 
e verifica se ela atende aos requisitos de segurança

2 - O for está percorrendo a string de senha, mas não vai até o final da string senha. 
 Ele para três posições antes (password.length - 3).
 
3 - Obtém o código Unicode do caractere na posição i: charCodeAt é uma função nativa do JavaScript
que retorna o código Unicode do caractere localizado em uma posição específica dentro da string. 
Esse código Unicode é representado por um número inteiro correspondente a tabela UTF-16.

4 - O if verifica se os próximos três caracteres estão em ordem crescente:
charCode === password.charCodeAt(i + 1) - 1 -> verifica se o segundo caractere é o seguinte do primeiro.
charCode === password.charCodeAt(i + 2) - 2 -> verifica se o terceiro caractere é o seguinte do segundo.
charCode === password.charCodeAt(i + 3) - 3 -> verifica se o quarto caractere é o seguinte do terceiro.
Se a condição acima for verdadeira, significa que a senha contem 4 caracteres em ordem crescente e 
retorna uma mensagem de erro.
 
5 - O if verifica se os próximos três caracteres estão em ordem decrescente.
*/

/* 
6 - função que verifica cada critério da senha.

7 - array de critérios(regras da senha)

8 - O .reduce() é utilizado para percorrer o array rules e somar quantas regras a senha atende.
O reduce() recebe dois argumentos:
Um callback (acc, rule) => acc + checkRulesPassword(rule, password), que será executado para cada item do array.
Um valor inicial, no caso é 0 que será usado como ponto de partida para a soma.
*/
