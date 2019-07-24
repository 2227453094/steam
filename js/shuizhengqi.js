'use strict'

// let spotlight_move = $(".spotlight_move");
// let left_arrow = $(".left_arrow");
// let right_arrow = $(".right_arrow");
// let span_List = $(".spanList");
// let indx = 0;
// function paitata() {
//     spotlight_move.fadeOut(1000);
//     span_List.css("background-color", "#495360");
// }
// right_arrow.click(function () {
//     indx++;
//     paitata();
//     if(indx == spotlight_move.length){
//         indx = 0;
//         $(spotlight_move[indx]).fadeIn(1000);
//         $(span_List[indx]).css("background-color", "#767e88");
//     }
// });
// left_arrow.click(function () {
//     indx--;
//     paitata();
//     if(indx == -1){
//         indx = spotlight_move.length - 1;
//         $(spotlight_move[indx]).fadeIn(1000);
//         $(span_List[indx]).css("background-color", "#767e88");
//     }
// });





//新品与热门商品
function getPage(data){
    let tab_item = $(".tab_item");
    let items = $("#items");
    for(let i = 0; i < data.length; i++){
        let A = tab_item.clone();
    
        //页面刷新之后的第一组数据
        $(".home_rightcol > .tab_preview_container > .tab_preview > .tab_preview_h2").html(data[0].name);
        let title_lable = $(".home_rightcol > .tab_preview_container > .tab_preview > .tab_review_summary > .title_lable");
        let evaluateList = data[0].evaluate;
        let title_haoping = $(".home_rightcol > .tab_preview_container > .tab_preview > .tab_review_summary > .title_haoping");
        if (evaluateList == 1) {
            title_lable.html(`好评如潮`);
            title_lable.css("color", "#66C0F4;");
        } else if (evaluateList == 2) {
            title_lable.html(`特别好评`);
            title_lable.css("color", "#66C0F4;");
        } else if (evaluateList == 3) {
            title_lable.html(`多半好评`);
            title_lable.css("color", "#66C0F4;");
        } else if (evaluateList == 4) {
            title_lable.html(`褒贬不一`);
            title_lable.css("color", "#B9A074;");
        } else if (evaluateList == 5) {
            title_lable.html(`多半差评`);
            title_lable.css("color", "#B9A074;");
        } else if (evaluateList == 6) {
            title_lable.html(`差评如潮`);
            title_lable.css("color", "#B9A074;");
        } else if (evaluateList == 7) {
            title_lable.html(``);
        }
        title_haoping.html(`(${data[0].evaluatingCount})`);
        for(let r = 0; r < data[0].label.length; r++){
                
            let tags_span = $("<span>");
            tags_span.attr("class","tags_span");
            tags_span.html(`${data[0].label[r]},`);
            $(".tags").append(tags_span);
        }
        $(".screenshot1").css("background", "url(" + data[0].imgUrl[1] + ")");
        $(".screenshot2").css("background", "url(" + data[0].imgUrl[2] + ")");
        $(".screenshot3").css("background", "url(" + data[0].imgUrl[3] + ")");
        $(".screenshot4").css("background", "url(" + data[0].imgUrl[4] + ")");


        //A的鼠标移上事件
        A.mouseenter(function () {
            $(".tags").html(``);
            $(".home_rightcol > .tab_preview_container > .tab_preview > .tab_preview_h2").html(data[$(this).index()].name);
            if (evaluateList == 1) {
                title_lable.html(`好评如潮`);
                title_lable.css("color", "#66C0F4;");
            } else if (evaluateList == 2) {
                title_lable.html(`特别好评`);
                title_lable.css("color", "#66C0F4;");
            } else if (evaluateList == 3) {
                title_lable.html(`多半好评`);
                title_lable.css("color", "#66C0F4;");
            } else if (evaluateList == 4) {
                title_lable.html(`褒贬不一`);
                title_lable.css("color", "#B9A074;");
            } else if (evaluateList == 5) {
                title_lable.html(`多半差评`);
                title_lable.css("color", "#B9A074;");
            } else if (evaluateList == 6) {
                title_lable.html(`差评如潮`);
                title_lable.css("color", "#B9A074;");
            } else if (evaluateList == 7) {
                title_lable.html(``);
            }
            title_haoping.html(`(${data[$(this).index()].evaluatingCount})`);

            for(let r = 0; r < data[$(this).index()].label.length; r++){
                
                let tags_span = $("<span>");
                tags_span.attr("class","tags_span");
                tags_span.html(`${data[$(this).index()].label[r]},`);
                $(".tags").append(tags_span);
            }

            $(".screenshot1").css("background", "url(" + data[$(this).index()].imgUrl[1] + ")");
            $(".screenshot2").css("background", "url(" + data[$(this).index()].imgUrl[2] + ")");
            $(".screenshot3").css("background", "url(" + data[$(this).index()].imgUrl[3] + ")");
            $(".screenshot4").css("background", "url(" + data[$(this).index()].imgUrl[4] + ")");
        });

        A.css("display","block");
        A.attr("href",data[i].url);
        A.attr("gameId",data[i].gameId);
        A.find(".tab_item_cap > img").attr("src",data[i].imgUrl[0]);
        A.find(".tab_item_discount > .discount_pct").html(`-${data[i].discount * 100}%`)
        if(data[i].discount == 0){
            A.find(".tab_item_discount > .discount_pct").html("");
        }
        A.find(".tab_item_discount > .discount_original_price").html(`￥${data[i].originPrice}`);
        if(data[i].originPrice == "免费开玩"){
            A.find(".tab_item_discount > .discount_original_price").html("");
        }
        if(data[i].originPrice == "免费"){
            A.find(".tab_item_discount > .discount_original_price").html("");
        }
        A.find(".tab_item_discount > .discount_final_price").html(`￥${data[i].price}`);
        if(data[i].price == "免费开玩"){
            A.find(".tab_item_discount > .discount_final_price").html(data[i].price);
        }
        if(data[i].originPrice == data[i].price){
            A.find(".tab_item_discount > .discount_original_price").html("");
        }
        if(data[i].originPrice == 0){
            A.find(".tab_item_discount > .discount_original_price").html("");
        }
        if(data[i].price == "免费"){
            A.find(".tab_item_discount > .discount_original_price").html(data[i].price);
        }
        A.find(".tab_item_content > .tab_item_name").html(data[i].name);
        for(let c = 0;c < data[i].platform.length; c++){
            if(data[i].platform[c] == "Steam"){
                A.find(".tab_item_details > .platform_img > .platform_img_steam").css("opacity",1)
            }
            if(data[i].platform[c] == "Windows"){
                A.find(".tab_item_details > .platform_img > .platform_img_windows").css("opacity",1);
            }
            if(data[i].platform[c] == "Mac OS"){
                A.find(".tab_item_details > .platform_img > .platform_img_ios").css("opacity",1);
            }
            if(data[i].platform[c] == "支持VR"){
                A.find(".tab_item_details > .platform_img > .platform_img_VR").css("opacity",1);
            }
            if(data[i].platform[c] == "VR独占"){
                A.find(".tab_item_details > .platform_img > .platform_img_DZ").css("opacity",1);
            }
        }
        for(let p = 0; p < data[i].label.length; p++){
            let spanList = $("<span>");
            spanList.html(`${data[i].label[p]},`);
            spanList.attr("class","top_tag");

            A.find(".tab_item_details > .tab_item_top_tags").append(spanList);
        }

        items.append(A);
    }
}

//下边右点击事件-->>点击变地址
let index = 1;
$(".pagebtn").click(function(){
    index++;
    let src =  $("<script>");
    let head = $("head");
    $("head").append(src);
    src.attr("src","http://pujie1213.top:90/gamePage?page=" + index + "&callback=getPage");
    $("#items").empty();
});

//下边数字点击事件
let spanchuan = $(".spanchuan");
spanchuan.click(function () {
    spanchuan.css("color", "#3b6e8c");
    let src =  $("<script>");
    let head = $("head");
    $("head").append(src);
    src.attr("src","http://pujie1213.top:90/gamePage?page=" + Number($(this).html()) + "&callback=getPage");
    $("#items").empty();
    $(this).css("color","#fff");
    if(Number($(this).html()) >= "5"){
        let spandian1 = $("<span>");
        spandian1.attr("class","spandian1 paged_items_paging_pagelink");
        spandian1.html("...");
        spandian1.css("color","#fff");
        spandian1.insertBefore($(".chuanchuan5"));
    }
});