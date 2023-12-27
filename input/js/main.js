    btnElement = document.querySelector(".btn");
    resultElement = document.querySelector(".result");
    inputElement = document.querySelector(".name");

    btnElement.addEventListener("click", function() {
        if (inputElement.value === "") {
            inputElement.style.borderColor = "red";
            resultElement.textContent = "";
        }
        else {
            inputElement.style.borderColor = "green";
            resultElement.textContent = inputElement.value;
        }
    });

    inputElement.addEventListener('click', function () {
        inputElement.style.borderColor = "grey";
    });



