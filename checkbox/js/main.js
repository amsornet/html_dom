btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
radioButtons = document.querySelectorAll('[name = "food"]');

btnElement.addEventListener("click", function () {
    let selectedContactValue = [];
    let total = 0;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedContactValue = radioButton.value;
            total += parseInt(radioButton.value);
        }
    }
    if (selectedContactValue != "") {
        resultElement.textContent = `${total} руб`;
    } else {
        resultElement.textContent = "ничего не выбрано.";
    }
});
