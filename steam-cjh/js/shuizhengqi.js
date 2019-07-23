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
        
        //A的鼠标移上事件
        A.mouseenter(function () {
            $(".home_rightcol > .tab_preview_container > .tab_preview > .tab_preview_h2").html(data[$(this).index()].name);
            
        });

        console.log(data);
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
        A.find(".tab_item_discount > .discount_final_price").html(`￥${data[i].price}`);
        if(data[i].price == "免费开玩"){
            A.find(".tab_item_discount > .discount_final_price").html(data[i].price);
        }
        if(data[i].originPrice == data[i].price){
            A.find(".tab_item_discount > .discount_original_price").html("");
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
            spanList.html(data[i].label[p]);
            spanList.attr("class","top_tag");
            A.find(".tab_item_details > .tab_item_top_tags").append(spanList);
        }

        items.append(A);
    }
}