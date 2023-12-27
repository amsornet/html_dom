

let elems = document.querySelectorAll('.btn');

elems.forEach(element => {
    element.style.background = '#009688';
    element.style.fontSize = '49px';
    element.style.color = '#fff';

    element.innerHTML = "sometimes";

    element.classList.add('border');
});

document.querySelector(".btn").onclick = function() {
    alert("hello!");
}

document.querySelector(".btn").addEventListener("click", () =>
    alert("1")
);
document.querySelector(".btn").addEventListener("click", () =>
    alert("2")
);