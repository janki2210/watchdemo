
        function btnclick() {
            let number1 = parseInt(document.getElementById('num1').value)
            let number2 = parseInt(document.getElementById('num2').value)
            document.getElementById('add').innerText = number1 + number2
            document.getElementById('sub').innerText = number1 - number2
            document.getElementById('mul').innerText = number1 * number2
            document.getElementById('div').innerText = number1 / number2
        }
    