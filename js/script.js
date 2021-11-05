setTimeout(function () { document.body.classList.add('body_visible'); }, 100);

let nav = document.querySelector('.nav');
let dropdown = nav.querySelector('.dropdown');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");
dropdownToggle.addEventListener('click', function() {
    dropdown.classList.contains('show') ? dropdown.classList.remove('show') : dropdown.classList.add('show')
})



var IsShow = function (item) {
    var heading = document.getElementById(item)
    heading.style.display = heading.style.display === 'none' ? 'block' : 'none';
}

function TableEvents() {
    var color;
    var allTableRows = document.getElementsByTagName("tr");
    for (tr of allTableRows) {
        tr.onmouseenter = tr.onmouseleave = function (event) {
            if (event.type == 'mouseleave') event.target.style.background = color;
            else {
                color = event.target.style.background;
                event.target.style.background = "#e0e0e0";
            }
        }
    }
}
TableEvents();



let email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
let corr_email = false;
let corr_phone = false;

function onchange_form(elem) {
    if (elem.id == "email") {
        if (!(corr_email = email.test(elem.value))) 
            alert("Неправильний формат електронної пошти! Введіть у форматі username@***.**");
    }
    else {
        if (!(corr_phone = phone.test(elem.value))) 
            alert("Неправильний номер телефону!\nВведіть у форматі ***-***-**** або **********");
    }


    document.getElementById("send").disabled = !(corr_email && corr_phone);
}







function KeyHot() {
    document.onkeydown = func1;
    var Array = ["index.html", "computer-time.html", "programming-languages.html", "computer-time.html", "hobby.html", "ai.html", "contact.html", "gallery.html", "plans-future.html"] 
    function func1(event) {
        if (event.altKey && event.keyCode > 48 && event.keyCode <= 48 + Array.length) 
            document.location = Array[event.keyCode - 49];
    }
}


KeyHot();