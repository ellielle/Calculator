const display = document.querySelector("#display");
const container = document.querySelector(".calc-container");
let calculate = [];
let ops = [];
let returnAnswer = 0;


window.onload = () => {
    display.value = '';
    addButtons();
    ops.length = 0;
    calculate.length = 0;
};
addButtons = () => {
    btn("btn", "AC");
    btn("btn", "<-");
    btn("btn", "÷");
    btn("btn", "7");
    btn("btn", "8");
    btn("btn", "9");
    btn("btn", "x");
    btn("btn", "4");
    btn("btn", "5");
    btn("btn", "6");
    btn("btn", "-");
    btn("btn", "1");
    btn("btn", "2");
    btn("btn", "3");
    btn("btn", "+");
    btn("btn", "0");
    btn("btn", ".");
    btn("btn", "=");
};
btn = (clName, attributeData) => {    
    const buttons = document.createElement("button");
    buttons.textContent = attributeData;
    buttons.setAttribute("data", attributeData);
    if (attributeData == "AC") buttons.setAttribute("id", "allClear");
    if (attributeData == "0") buttons.setAttribute("id", "zero");

    container.appendChild(buttons).classList.add(`${clName}`);

    buttons.addEventListener("click", (e) => {
        let data = e.target.getAttribute("data");
        if (!isNaN(parseFloat(data))) {
            display.value += data;
        }
        else if (data == ".") display.value += data;
        else if (data == "AC") {
            calculate.length = 0; 
            ops.length = 0;
            display.value = '';       
            returnAnswer = 0;     
        }
        else if (data == "<-") {
            display.value = display.value.slice(0, -1);
        }
        else if (data == "+" || data == "-" || data == "x" || data == "÷") {
            display.value += data;
            ops.push(data);
        }
        else {
            operate();
            calculate.length = 0;
            ops.length = 0;
        }

    });
};
operate = () => {
    let temp = display.value.split(/[x÷+-]/g);
    temp.forEach(num => {
        calculate.push(parseFloat(num));
    });
    ops.push(''); //temporary measure to bring both arrays to the same length
    returnAnswer = calculate[0];
    for (let i = 0; i < calculate.length; i++) {
        if (ops[i] == "+") {
            returnAnswer += calculate[i+1];
        }
        else if (ops[i] == "-") {
            returnAnswer -= calculate[i+1];
        }
        else if (ops[i] == "x") {
            returnAnswer *= calculate[i+1];
        }
        else if (ops[i] == "÷") {
            Math.floor(returnAnswer /= calculate[i+1]);            
        }                
    }
    if (returnAnswer % 1 === 0) {
        display.value = returnAnswer;
    }
    else if (isNaN(returnAnswer)) {
        display.value = "ERROR";
    }
    else display.value = returnAnswer.toFixed(2);
    
};
