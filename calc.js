const display = document.querySelector("#display");
const container = document.querySelector(".calc-container");
let calculate = [33, 33, 33];


window.onload = () => {
    display.value = '';
    addButtons();
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
            console.log(display.value);
            
            calculate.length = 0; 
            display.value = '';            
        }
        else if (data == "<-") {
            display.value = display.value.slice(0, -1);
        }

    });
};

addition = () => {
    
    
};

subtraction = () => {
    
};

multiplication = () => {
    
};

division = () => {

};

operate = () => {
    
};
