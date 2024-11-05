let expression = "";

function addNumber(number) {
  expression += number;
  document.getElementById("display").value = expression;
}

function calculate() {
  try {
    document.getElementById("display").value = eval(expression);
    expression = ""; // Limpar expressão após o cálculo
  } catch {
    document.getElementById("display").value = "Erro";
    expression = ""; // Limpar expressão em caso de erro
  }
}
