const radioButtons = document.querySelectorAll('[name="contact"]');
const resultElement = document.querySelector(".result");
let selectedContactValues = [];
let total = 0;

radioButtons.forEach(element => {
    element.addEventListener("change", function() {
        if (element.checked) {
            selectedContactValues.push(element.value);
            total += parseInt(element.value);
        } else {
            selectedContactValues.splice(selectedContactValues.indexOf(element.value), 1)
            total -= parseInt(element.value);

        }
        if (selectedContactValues.length != 0) {
            resultElement.textContent = `${total} руб.`;
        } else {
            resultElement.textContent = "ничего не выбрано.";
        }
    });
});


