let input = 0;
let queue = [];




function numericButton(arg) {


    input += arg;
    document.getElementById("answer").innerHTML += arg;

}

function operatorButton(sign) {
    if (input !== 0) {
        input = parseFloat(input);
        addToQueue(input);
        addToQueue(sign);
        document.getElementById("answer").innerHTML += sign;
        input = 0;

    }
}

function addToQueue(input) {
    queue.push(input);
}
function calculateQueue(value) {
    if (input !== 0) {
        input = parseFloat(input);

        addToQueue(input);
    }
    var answer = value[0];
    for (var i = 2; i < value.length; i = i + 2) {
        answer += value[i];
    }
    // i+2 for the array as array[0],array[2],... will contain the numeric and array[1],array[3],.... will contain operators.

    document.getElementById("answer").innerHTML = answer;
    input = answer;
    queue = [];
}


function clearAll() {
    queue = [];
    input = 0;
    document.getElementById("answer").innerHTML = "0";
}