'use strict'
let cookieList = new Cookie();
function getJSON(data) {
    let item = $("#item");
    let wrap = $(".carousel_items");
    let cookieObj = [];
    for (let i = 0; i < data.length; i++) {

        let A = item.clone();
        A.attr("id", "");
        A.find(".app_left").css("background", "url(" + data[i].imgUrl[0] + ")");
        A.find(".app_right_top").html(data[i].name);
        let spanList = A.find(".arb_p1 > span");
        spanList.eq(0).html(`-${data[i].discount * 100}%`);
        spanList.eq(1).html(`￥${data[i].originPrice}`);
        spanList.eq(2).html(`￥${data[i].price}`);
        let img4 = A.find(".app_right_middle img");
        A.find(".hover_release").html(`发行于${data[i].date}`);

        A.attr("gameid", data[i].gameId);
        // A.attr("href",data[i].url);

        A.click(function () {
            let gameid = $(this).attr("gameid");
            if (cookieObj.indexOf(gameid) == -1) {
                cookieObj.push(gameid);
            }
            console.log(cookieObj)
        });



        let posiLi = A.find(".posi > li");

        for (let j = 0; j < data[i].imgUrl.length; j++) {
            img4.eq(j).attr("src", data[i].imgUrl[j]);
            posiLi.eq(j).css({
                "background": "url(" + data[i].imgUrl[j] + ")",
                "background-size": "270px 160px"
            });
        }


        let ind = 0;
        A.mouseenter(function () {
            ind++;

            let game_hover = ($(this).find(".game_hover"));
            game_hover.css("display", "block");
            posiLi.fadeOut(500);
            $(posiLi[ind]).fadeIn(500);
        });
        A.mouseleave(function () {
            $(".game_hover").css("display", "none");
            posiLi.fadeOut(500);
            ind = 0;
        });



        for (let c = 0; c < data[i].platform.length; c++) {
            let platformList = data[i].platform;
            let platform_img = A.find(".arb_b2 > span");
            if (platformList[c] == "Windows") {
                platform_img.eq(0).css("display", "block");
            }
            if (platformList[c] == "Steam") {
                platform_img.eq(1).css("display", "block");
            }
            if (platformList[c] == "Mac OS") {
                platform_img.eq(2).css("display", "block");
            }
            if (platformList[c] == "HTCvive") {
                platform_img.eq(3).css("display", "block");
            }
            if (platformList[c] == "oculusrift") {
                platform_img.eq(4).css("display", "block");
            }

        }


        let evaluateList = data[i].evaluate;
        let pingcezuo = A.find(".pingcezuo");
        if (evaluateList == 1) {
            pingcezuo.html(`好评如潮`);
            pingcezuo.css("color", "#66C0F4;");
        } else if (evaluateList == 2) {
            pingcezuo.html(`特别好评`);
            pingcezuo.css("color", "#66C0F4;");
        } else if (evaluateList == 3) {
            pingcezuo.html(`多半好评`);
            pingcezuo.css("color", "#66C0F4;");
        } else if (evaluateList == 4) {
            pingcezuo.html(`褒贬不一`);
            pingcezuo.css("color", "#B9A074;");
        } else if (evaluateList == 5) {
            pingcezuo.html(`多半差评`);
            pingcezuo.css("color", "#B9A074;");
        } else if (evaluateList == 6) {
            pingcezuo.html(`差评如潮`);
            pingcezuo.css("color", "#B9A074;");
        } else if (evaluateList == 7) {
            pingcezuo.html(``);
        }

        A.find(".pingceyou").html(`(${data[i].evaluatingCount}篇评测)`);


        let bianqian = A.find(".bianqian");
        for (let b = 0; b < data[i].label.length; b++) {
            let spanS = document.createElement("span");
            $(spanS).html(data[i].label[b]);
            bianqian.append(spanS);
        }


        wrap.append(A);
    }







    //轮播图
    let lj = $(".left");
    let rj = $(".right");
    let appList = $(".carousel_items > .app");
    let divList = $(".carousel_thumbs > div");
    let index = 0;
    rj.click(function () {
        index++;
        paita();
        if (index == appList.length) {
            index = 0;
        }
        $(appList[index]).fadeIn(1000);
        $(divList[index]).css("background-color", "#767e88");
    });
    lj.click(function () {
        index--;
        paita();
        if (index == -1) {
            index = appList.length - 1;
        }
        $(appList[index]).fadeIn(1000);
        $(divList[index]).css("background-color", "#767e88");
    });
    divList.click(function () {
        paita();
        $(appList[index]).fadeIn(1000);
        index = $(this).index();
        $(divList[$(this).index()]).css("background-color", "#767e88");
    });
    let move = setInterval(function () {
        rj.click();
        if (index == appList.length) {
            index = 0;
        }
    }, 3000);
    function paita() {
        appList.fadeOut(1000);
        divList.css("background-color", "#495360");
    }


    // appList.mouseenter(function () {

    // });
}

function fnn(data){
    data.forEach(function (item, index){
        let aList = $("<a>");
        aList.attr("href",item.href);
        aList.html(item.name);
        $(".gutter_itemss").append(aList);
    });
}
//放入cookie数组
window.onunload = function () {
    if (cookieObj.length != 0) {
        if (cookieList.getCookie("history")) {
            let gameArr = cookieList.getCookie("history").split(",");
            cookieObj.forEach(function (item, index) {
                if (gameArr.indexOf(item) == -1) {
                    gameArr.push(item);
                }
            })
            cookieList.setCookie("history", gameArr, 7);
        } else {
            cookieList.setCookie("history", cookieObj, 7);
        }
    }
}
//最近查看
let history = $("#history");
if(!cookieList.getCookie("history")){
    history.css("display","none");
}else{
    let data = cookieList.getCookie("history");
    let scripts = $("<script>");
    scripts.attr("src", `http://pujie1213.top:90/history?gameId=${data}&callback=fnn`);
    scripts.appendTo($("body"));
}