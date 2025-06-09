function otoslotto() {
  const numbers = new Set();

  
  while (numbers.size < 5) {
    const rand = Math.floor(Math.random() * 90) + 1;
    numbers.add(rand);
  }

  
  return Array.from(numbers).sort((a, b) => a - b);
}


document.addEventListener('DOMContentLoaded', () => {
  const result = otoslotto();
  console.log("Generált lottószámok:", result);

  const resultDiv = document.createElement('div');
  resultDiv.textContent = "Erzsi néni számai: " + result.join(', ');
  resultDiv.style.fontSize = '20px';
  resultDiv.style.margin = '20px';
  document.body.appendChild(resultDiv);
});
