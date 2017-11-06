var outputDiv;



var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div']

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
    var c = eval(mathExp)
    outputDiv.innerText = ""
    outputDiv.innerText = c
}

document.addEventListener('DOMContentLoaded', function () {
    outputDiv = document.getElementById('output');

    document.addEventListener('click', function (event) {

        var elementId = event.target.id;

        outputDiv.innerText += elementId;

        if ((outputDiv.innerText).slice((outputDiv.innerText).length - 3) === "add") {
            outputDiv.innerText = outputDiv.innerText.slice(0, (outputDiv.innerText).length - 3) + "+"
        } else if ((outputDiv.innerText).slice((outputDiv.innerText).length - 3) === "sub") {
            outputDiv.innerText = outputDiv.innerText.slice(0, (outputDiv.innerText).length - 3) + "-"
        } else if ((outputDiv.innerText).slice((outputDiv.innerText).length - 3) === "mul") {
            outputDiv.innerText = outputDiv.innerText.slice(0, (outputDiv.innerText).length - 3) + "*"
        } else if ((outputDiv.innerText).slice((outputDiv.innerText).length - 3) === "div") {
            outputDiv.innerText = outputDiv.innerText.slice(0, (outputDiv.innerText).length - 3) + "/"
        }


        if (outputDiv.innerText.length >= 17) {
            outputDiv.innerText = ""
        }

        var equation = outputDiv.innerText
        equation = equation.replace(/mul/g, '*').replace(/div/g, '/').replace(/sub/g, '-').replace(/add/g, '+');
        if (elementId === "eq") {
            var last = equation.slice(0, (equation.length) - 2)
            calculate(last)
        } else if (elementId === "clr") {
            outputDiv.innerText = ""
        }
    })
})