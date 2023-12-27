const btn = document.querySelector("#btn");
const radioElements = document.querySelectorAll('[name="goods"]');

const choiceGood = {
    value: "",
    price: 0,
    size: "",
};

btn.addEventListener("click", function() {
    radioElements.forEach(element => {
        if (element.checked) {
            choiceGood.value = element.value;
            choiceGood.price = parseInt(element.dataset.price);
            choiceGood.size = element.dataset.size;
        }
    })
    console.log(choiceGood);
});
