setTimeout(function () { document.body.classList.add('body_visible'); }, 100);

let nav = document.querySelector('.nav');
let dropdown = nav.querySelector('.dropdown');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");
dropdownToggle.addEventListener('click', () => {
    dropdown.classList.contains('show') ? dropdown.classList.remove('show'): dropdown.classList.add('show')
})



var IsShow = function (item) {
    var heading = document.getElementById(item)
    heading.style.display = heading.style.display === 'none' ? 'block' : 'none';
}

function applyTableEvents() {
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
applyTableEvents();



let email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
let corr_email = false;
let corr_phone = false;

function onchange_form(elem) {
    if (elem.id == "email") {
        if (!(corr_email = email.test(elem.value))) {
            alert("Неверный формат электронной почты! Введите в формате XXX@XXX.XXX");
        }
    }
    else {
        if (!(corr_phone = phone.test(elem.value))) {
            alert("Неверный формат номера телефона!\nВведите в формате XXX-XXX-XXXX или XXXXXXXXXX");
        }
    }


    document.getElementById("send").disabled = !(corr_email && corr_phone);
}




function slider() {
    let imgMove = 0;
    const sliderLiner = document.querySelector('.slider-line');
    document.querySelector('.slider-next').addEventListener('click', function () {
        imgMove += 828;
        if (imgMove > 2484) imgMove = 0; 
        sliderLiner.style.left = -imgMove + 'px';
    });
    document.querySelector('.slider-prev').addEventListener('click', function () {
        imgMove -= 828;
        if (imgMove < 0) imgMove = 2484; 
        sliderLiner.style.left = -imgMove + 'px';
    });
}

slider();


function modalWindow() {
    var galleries = document.querySelectorAll(".slider-line");
    for (gallery of galleries) {
        var imgs = gallery.childNodes;
        for (img of imgs)  if (img.tagName == "IMG") img.onclick = onclick_upperimage; 
    }

    function onclick_upperimage(even) {
        var div_img = document.createElement("div");
        div_img.id = "popup";
        var x_close = document.createElement("h3");
        x_close.innerHTML = "X";
        div_img.onclick = function (even) {
            if (even.target.tagName != "img")  document.body.removeChild(document.getElementById("popup"));
        }
        var img = document.createElement("img");
        img.src = even.target.src;
        document.body.appendChild(div_img).appendChild(img);
        div_img.appendChild(x_close);
    }
}

modalWindow()
