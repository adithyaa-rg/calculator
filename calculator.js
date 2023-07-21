let operator = '';
let number = '';
let displayElement = document.querySelector('.display');

let equation = {
    number1 : 0,
    operator : operator,
    number2 : 0,
    calculateEquation()
    {
        temp = this.number2;
        if (this.operator === '+'){
            this.number2 = this.number1 + this.number2;
        }
        else if (this.operator === '-'){
            this.number2 = this.number1 - this.number2;
        }
        else if (this.operator === '*'){
            this.number2 = this.number1 * this.number2;
        }
        else if (this.operator === '/'){
            this.number2 = this.number1 / this.number2;
        }
        if (this.number2 !== 0){ 
        this.number1 = this.number2;
        }
        else{
            this.number1 = temp;
        }
    }
};

function conductOperations(e){
    let buttonText;
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (e.target.className == 'key' || key){
        if (key){
            buttonText = key.innerText;
        }
        else{
            buttonText = e.target.outerText;
        }
        console.log(buttonText);
        if (Number(buttonText) || buttonText == '.' || buttonText === '0'){
            number += buttonText;
            equation.number2 = parseFloat(number);
            displayElement.textContent = String(Math.round(equation.number2*100)/100);
        }
        else{
            if (buttonText === '='){
                equation.calculateEquation();
                displayElement.textContent = String(Math.round(equation.number2*100)/100);
                equation.number1 = 0;
                equation.number2 = 0;
            }
            else if (buttonText === 'Clear'){
                equation.number1 = 0;
                equation.number2 = 0;
                displayElement.textContent = String(Math.round(equation.number2*100)/100);
            }
            else{
                equation.calculateEquation();
                equation.operator = buttonText;
                displayElement.textContent = String(Math.round(equation.number2*100)/100);
                equation.number2 = 0;
            }
            number = '';
        }
    }
}

function Calculator(){
    addEventListener('click',(e) => conductOperations(e));
    addEventListener('keydown', (e) => conductOperations(e));
}

Calculator();