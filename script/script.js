var count = 0;
var elem, elem2, elem3;
function open_menu(event){
    elem = document.getElementsByClassName("menu_first")[0];
    elem2 = document.getElementsByClassName("content_panel")[0];
    elem3 = document.getElementsByClassName("button_menu")[0];
    if (count == 0){
        elem2.style.width = "54vw";
        elem.style.width = "23vw";
        count+=1;
        elem3.style.width = "23vw";
    }
    else if (count == 1) {
        elem2.style.width = "71.4vw";
        elem.style.width = "5.6vw";
        count-=1;
        elem3.style.width = "5.6vw";
    }
}