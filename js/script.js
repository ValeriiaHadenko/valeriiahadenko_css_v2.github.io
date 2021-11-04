setTimeout(function () { document.body.classList.add('body_visible'); }, 200);

let nav = document.querySelector('.nav');
let dropdown = nav.querySelector('.dropdown');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

dropdownToggle.addEventListener('click', () => {
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
})



var IsShow = function (box) {
    var heading = document.getElementById(box)
    heading.style.display = heading.style.display === 'none' ? 'block' : 'none';
}

var oldcolor;
function applyTableEvents() {
    var allTableRows = document.getElementsByTagName("tr");
    for (tr of allTableRows) {
        tr.onmouseenter = tr.onmouseleave = function (event) {
            if (event.type == 'mouseleave') {

                event.target.style.background = oldcolor;
            }
            else {
                oldcolor = event.target.style.background;
                event.target.style.background = "#e0e0e0";
            }
        }
    }
}
applyTableEvents();



let reg_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let reg_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
let corr_email = false;
let corr_phone = false;

function onchange_form(elem) {
    if (elem.id == "email") {
        if (!(corr_email = reg_email.test(elem.value))) {
            alert("Неверный формат электронной почты! Введите в формате XXX@XXX.XXX");
        }
    }
    else {
        if (!(corr_phone = reg_phone.test(elem.value))) {
            alert("Неверный формат номера телефона!\nВведите в формате XXX-XXX-XXXX или XXXXXXXXXX");
        }
    }


    document.getElementById("send").disabled = !(corr_email && corr_phone);
}

