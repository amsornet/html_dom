btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
radioButtons = document.querySelectorAll('[name = "contact"]');

btnElement.addEventListener("click", function() {
    let selectedContactValue = "";
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedContactValue = radioButton.value;
            break;
        }
    }
    if (selectedContactValue != "") {
        resultElement.textContent = selectedContactValue;
    } else {
        resultElement.textContent = "ничего не выбрано.";
    }
});