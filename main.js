var valX = document.getElementById('valueX');
var valY = document.getElementById('valueY');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xPercentageOfY')


form.addEventListener('submit', function(event){

    if (!valX.value || !valY.value){
        alert("please enter values oon both input fields")
    } else{
        var x = parseFloat(valX.value);
        var y = parseFloat(valY.value);

        var result = x / y;
        var peercentage = result * 100;

        resultField.innerText = "Result: " + peercentage + "%";
        event.preventDefault();
    }

})