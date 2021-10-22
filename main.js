const hamburger = document.querySelector(".hamburger-menu");
const close = document.querySelector(".close");
const icon = document.querySelector(".fa-bars");

icon.addEventListener(`click`,
    function () {
        hamburger.classList.add('active');
    }
);

close.addEventListener(`click`,
    function () {
        hamburger.classList.remove('active');
    }
);