let global_action_link = $(".global_action_link");
let language_dropdown = $(".language_dropdown");
global_action_link.click(function () {
    language_dropdown.css("display", "block");
});
window.onclick = function (e) {
    if (e.target.className !== "global_action_link") {
        language_dropdown.css("display", "none");
    }
}

    //改变this指向
    // let obj1 = {
    //     name:"zhaojian",
    //     age:350
    // }
    // function fn(){
    //     console.log(obj1,1)
    // }
    // //fn.apply(obj1,[1])
    // //fn.call(obj1,1)
    // //fn.bind(obj1,1)();
