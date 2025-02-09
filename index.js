import "./styles.css";

const inputSum = document.createElement("input");
inputSum.type = "number";
inputSum.placeholder = "Введите сумму";

const inputCount = document.createElement("input");
inputCount.type = "number";
inputCount.placeholder = "Введите количество";

const button = document.createElement("button");
button.textContent = "Рассчитать";

const clearButton = document.createElement("button");
clearButton.textContent = "Очистить";

document.body.appendChild(inputSum);
document.body.appendChild(inputCount);
document.body.appendChild(button);
document.body.appendChild(clearButton);

clearButton.addEventListener("click", function () {
    container.innerHTML = "";
})

const container = document.createElement('div');
document.body.appendChild(container);

button.addEventListener("click", function () {
    const sum = parseFloat(inputSum.value);
    const count = parseInt(inputCount.value);
    
    if (isNaN(sum) || isNaN(count) || count <= 0) {
        alert("Введите корректные значения");
        return;
    }
    
    generateAndInsertBalancedArray(sum, count);
})


function generateAndInsertBalancedArray(sum, count) {
    if (count <= 0) return;
    
    let avg = sum / count;
    let min = avg * 0.75;
    let max = avg * 1.25;
    let result = [];
    let currentSum = 0;
    
    for (let i = 0; i < count - 1; i++) {
        let value = Math.random() * (max - min) + min;
        result.push(value);
        currentSum += value;
    }
    
    let lastValue = sum - currentSum;
    if (lastValue >= min && lastValue <= max) {
        result.push(lastValue);
    } else {
        return generateAndInsertBalancedArray(sum, count);
    }
    
    result = result.map(num => Math.round(num));
    
    
    result.forEach(num => {
        const h1 = document.createElement('h1');
        h1.textContent = num;
        container.appendChild(h1);
    });
    
    document.body.appendChild(container);
}
