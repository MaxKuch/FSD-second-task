import * as $ from 'jquery'

let itemsAmount = {
    totalSum() {
        let sum = 0;
        for(let value in this){
            if(typeof this[value] == "number")
                sum += this[value]
        }
        return sum
    },
    resetToZero() {
        for(let value in this){
            if(typeof this[value] == "number")
                this[value] = 0
        }
    }
}

$(".dropdown-input__expnd-more").on("click", function() {
    let isOpened = $(this).parent().next().css("display") == "none" 
    let borderColor = isOpened ? "#8F90A0" : "#C7C7CF"
    $(this).parent().next().slideToggle("fast")
    $(this).prev().css("border-color", borderColor)
    $(this).css("border-color", borderColor)
})

$(".dropdown__inc").each((indx, element) => {
    itemsAmount[$(element).attr("data-item")] = 0
})

$(".dropdown__inc").on("click", function(){
    if(itemsAmount.totalSum() == 0)
        $(".dropdown__btns-clear").css("visibility", "visible")
    if(itemsAmount[$(this).attr("data-item")] == 0)
        $(this).siblings(".dropdown__dec").css("opacity", "1")
    itemsAmount[$(this).attr("data-item")]++
    $(this).prev().html(itemsAmount[$(this).attr("data-item")])
})

$(".dropdown__dec").on("click", function(){
    if(itemsAmount[$(this).attr("data-item")] == 1)
        $(this).css("opacity", "0.38")
    if(itemsAmount[$(this).attr("data-item")] != 0){
        itemsAmount[$(this).attr("data-item")]--
        $(this).next().html(itemsAmount[$(this).attr("data-item")])
        if(itemsAmount.totalSum() == 0)
            $(".dropdown__btns-clear").css("visibility", "hidden")
    }
})

$(".dropdown__btns-clear").on("click", function(){
    $(".dropdown__count").html("0")
    itemsAmount.resetToZero()
    $(".dropdown__dec").css("opacity", "0.38")
    $(this).css("visibility", "hidden")
})