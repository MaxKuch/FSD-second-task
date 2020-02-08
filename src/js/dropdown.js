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
    $(this).parents(".dropdown").find(".dropdown-input__inp").attr("placeholder", "Сколько гостей")
})

$(".dropdown__btns-accept").on("click", function(){
    if(itemsAmount.totalSum != 0){
        if($(this).parents(".dropdown").attr("data-name") == "dropdown-guests"){
            $(this).parents(".dropdown").find(".dropdown-input__inp").attr("placeholder", showItemsAmount())
        }
            
    }
})

function showItemsAmount(){
    if(itemsAmount.totalSum() != 0){
        let outputStr = ""
        if(itemsAmount.adult != 0){
            if(itemsAmount.adult == 1)
            outputStr = "1 гость"
            else{
                if(itemsAmount.adult == 2 || itemsAmount.adult == 3 || itemsAmount.adult == 4)
                    outputStr = `${itemsAmount.adult} гостя`
                else
                    outputStr = `${itemsAmount.adult} гостей`
            }
            if(itemsAmount.adult != itemsAmount.totalSum())
                outputStr += ", "
        }
        if(itemsAmount.kids != 0){
            if(itemsAmount.kids == 1)
            outputStr += "1 ребенок"
            else{
                if(itemsAmount.kids == 2 || itemsAmount.kids == 3 || itemsAmount.kids == 4)
                outputStr += `${itemsAmount.kids} ребенка`
                else
                    outputStr += `${itemsAmount.kids} детей`
            }
            if((itemsAmount.adult + itemsAmount.kids) != itemsAmount.totalSum())
                outputStr += ", "
        }
        if(itemsAmount.babyes != 0){
            if(itemsAmount.babyes == 1)
                outputStr += "1 младенец"
            else{
                if(itemsAmount.babyes == 2 || itemsAmount.babyes == 3 || itemsAmount.babyes == 4)
                outputStr += `${itemsAmount.babyes} младенца`
                else
                    outputStr += `${itemsAmount.babyes} младенцев`
            }
        }
        return outputStr
    }
}