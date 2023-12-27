const contactChecked = {
    email: false,
    phone: false,
    mail: false,
};

const btn = document.querySelector('#btn');
const checkboxElements = document.querySelectorAll('[name="contact"]');


checkboxElements.forEach(element => {
    element.addEventListener("change", function (){
    contactChecked[element.value] = element.checked;
    console.log(contactChecked);
    })
})

