function performOperation() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var operation = document.getElementById('operation').value;

    // Validar que las entradas solo contengan números
    var regex = /^[0-7]+$/;
    if (!regex.test(num1) || !regex.test(num2)) {
        alert("Por favor, ingresa solo números octales (0-7).");
        return;
    }

    var num1Decimal = parseInt(num1, 8);
    var num2Decimal = parseInt(num2, 8);

    var result;
    switch(operation) {
        case 'add':
            result = num1Decimal + num2Decimal;
            break;
        case 'subtract':
            result = num1Decimal - num2Decimal;
            break;
        case 'multiply':
            result = num1Decimal * num2Decimal;
            break;
        case 'divide':
            if (num2Decimal == 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            result = num1Decimal / num2Decimal;
            break;
    }

    document.getElementById('result').innerText = result.toString(8);
}

