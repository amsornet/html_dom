btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
firstName = document.querySelector('[name = "firstname"]');
secondName = document.querySelector('[name = "secondname"]');

btnElement.addEventListener("click", function(){
    resultElement.textContent = `Здравствуйте, ${firstName.value} ${secondName.value} !`;
})