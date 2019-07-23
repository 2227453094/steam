'use strict'
// let wrap = document.getElementById("wrap");
// let wrap1 = document.getElementById("wrap1");
function Slider(el) {
    this.left = el.getElementsByClassName("button")[0].children[0];
    this.right = el.getElementsByClassName("button")[0].children[1];
    this.liList = el.getElementsByClassName("ml")[0].children;
    this.ml = el.getElementsByClassName("ml")[0];
    this.diandian = el.getElementsByClassName("diandian")[0];
    let _this = this;
    this.index = 0;

    for (let i = 0; i < this.liList.length; i++) {
        this.spanList = document.createElement("span");
        $(this.diandian).append($(this.spanList));
        $(this.spanList).click(function () {
            $(el).find(".diandian > span").css("background-color", "blue");
            $(_this.ml).animate({ "margin-left": "-" + ($(this).index() * 800) + "px" }, 500);
            $(this).css("background-color", "yellow");
            _this.index = $(this).index();
        });
    }

    this.rightclick = function () {
        _this.index++;
        if (_this.index == _this.liList.length) {
            _this.index = 0;
            let autoPlay = setInterval(function () {
                let ml = parseInt(getComputedStyle(_this.ml).marginLeft);
                _this.ml.style.marginLeft = ml + 100 + "px";
                ml = parseInt(getComputedStyle(_this.ml).marginLeft);
                if (ml == -(_this.index * 800)) {
                    clearInterval(autoPlay);
                    _this.ml.style.marginLeft = 0;
                }
            }, 16);

        } else {
            let autoPlay = setInterval(function () {
                let ml = parseInt(getComputedStyle(_this.ml).marginLeft);
                _this.ml.style.marginLeft = ml - 20 + "px";
                ml = parseInt(getComputedStyle(_this.ml).marginLeft);
                if (ml == -(_this.index * 800)) {
                    clearInterval(autoPlay);
                }
            }, 16);
        }
        $(el).find(".diandian > span").css("background-color", "blue");
        ($(el).find(".diandian > span").eq(_this.index)).css("background-color", "yellow");
    }

    this.leftclick = function () {
        _this.index--;
        if (_this.index == -1) {
            _this.index = _this.liList.length - 1;
            let autoPlay = setInterval(function () {
                let ml = parseInt(getComputedStyle(_this.ml).marginLeft);
                _this.ml.style.marginLeft = ml - 100 + "px";
                ml = parseInt(getComputedStyle(_this.ml).marginLeft);
                if (ml <= -(_this.index * 800)) {
                    clearInterval(autoPlay);
                    _this.ml.style.marginLeft = -(_this.index * 800) + "px";
                }
            }, 16);
        } else {
            let autoPlay = setInterval(function () {
                let ml = parseInt(getComputedStyle(_this.ml).marginLeft);
                _this.ml.style.marginLeft = ml + 20 + "px";
                ml = parseInt(getComputedStyle(_this.ml).marginLeft);
                if (ml == -(_this.index * 800)) {
                    clearInterval(autoPlay);
                }
            }, 16);
        }
        $(el).find(".diandian > span").css("background-color", "blue");
        ($(el).find(".diandian > span").eq(_this.index)).css("background-color", "yellow");
    }


    this.right.onclick = this.rightclick;
    this.left.onclick = this.leftclick;

    // let move = setInterval(function () {
    //     _this.rightclick();
    //     if(_this.index == _this.liList.length){
    //         _this.index = 0;
    //     }
    // },16);
}
    // let Slider1 = new Slider(wrap);
    // let Slider2 = new Slider(wrap1);
    // console.log(Slider1,Slider2)
