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

slider()


function modalWindow() {
    var galleries = document.querySelectorAll(".slider-line");
    for (gallery of galleries) {
        var imgs = gallery.childNodes;
        for (img of imgs) if (img.tagName == "IMG") img.onclick = onclick_upperimage;
    }

    function onclick_upperimage(even) {
        var div_img = document.createElement("div");
        div_img.id = "popup";
        var x_close = document.createElement("h3");
        x_close.innerHTML = "X";
        div_img.onclick = function (even) {
            if (even.target.tagName != "img") document.body.removeChild(document.getElementById("popup"));
        }
        var img = document.createElement("img");
        img.src = even.target.src;
        document.body.appendChild(div_img).appendChild(img);
        div_img.appendChild(x_close);
    }
}

modalWindow()
