import * as $ from 'jquery'
$(".dropdown-input").on("mouseover", function(){
    if ($(this).next().css("display") == "none")
        $(this).children().css("border-color", "#8F90A0")
})

$(".dropdown-input").on("mouseleave", function(){
    if ($(this).next().css("display") == "none")
        $(this).children().css("border-color", "#C7C7CF")
})

