import * as $ from 'jquery'

$(".dropdown-input__expnd-more").on("click", function() {
    let borderColor = $(this).parent().next().css("display") == "none" ? "#8F90A0" : "#C7C7CF"
    $(this).parent().next().slideToggle("fast")
    console.log($(this).prev().css("border-color"))
    $(this).prev().css("border-color", borderColor)
    $(this).css("border-color", borderColor)
})

