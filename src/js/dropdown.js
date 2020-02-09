import * as $ from 'jquery'

function ItemsAmount() {

    this.totalSum = function() {

        let sum = 0;
        for(let value in this){

            if(typeof this[value] == "number")
                sum += this[value]

        }
        return sum

    }
    this.resetToZero = function() {

        for(let value in this){

            if(typeof this[value] == "number")
                this[value] = 0

        }

    }

}

const itemsAmountGuests = new ItemsAmount()
const itemsAmountComfort = new ItemsAmount()

function showItemsAmount(target){

    let itemsAmount

    if($(this).parents(".dropdown").hasClass("dropdown_guests"))
        itemsAmount = itemsAmountGuests
    else
        itemsAmount = itemsAmountComfort

    if(itemsAmount.totalSum != 0){

        if($(target).parents(".dropdown").attr("data-name") == "dropdown-guests"){

            $(target)
            .parents(".dropdown")
            .find(".dropdown-input__inp")
            .attr("placeholder", toStringGuests($(target).parents(".dropdown").find(".dropdown-input__inp")))

        }

        if($(target).parents(".dropdown").attr("data-name") == "dropdown-comfort"){

            $(target)
            .parents(".dropdown")
            .find(".dropdown-input__inp")
            .attr("placeholder", toStringComfort($(target).parents(".dropdown").find(".dropdown-input__inp")))

        }             
    }
}

function refreshItemsAmount(target){
    let itemsAmount

    if($(target).parents(".dropdown").hasClass("dropdown_guests"))
        itemsAmount = itemsAmountGuests
    else
        itemsAmount = itemsAmountComfort

    $(target)
    .parents(".dropdown__list")
    .children("li")
    .each((indx, element) => {
        itemsAmount[$(element).attr("data-item")] = +$(element).find(".dropdown__count").text()
    })  
}

function toStringGuests(target){
    let outputStr = ""

    if(itemsAmountGuests.totalSum() != 0){

        if(itemsAmountGuests.adult != 0){

            if(itemsAmountGuests.adult == 1)
                outputStr = "1 гость"

            else{

                if(itemsAmountGuests.adult == 2 || itemsAmountGuests.adult == 3 || itemsAmountGuests.adult == 4)
                    outputStr = `${itemsAmountGuests.adult} гостя`
                else
                    outputStr = `${itemsAmountGuests.adult} гостей`

            }

            if(itemsAmountGuests.adult != itemsAmountGuests.totalSum())
                outputStr += ", "
        }

        if(itemsAmountGuests.kids != 0){

            if(itemsAmountGuests.kids == 1)
                outputStr += "1 ребенок"
            else{

                if(itemsAmountGuests.kids == 2 || itemsAmountGuests.kids == 3 || itemsAmountGuests.kids == 4)
                    outputStr += `${itemsAmountGuests.kids} ребенка`
                else
                    outputStr += `${itemsAmountGuests.kids} детей`

            }

            if((itemsAmountGuests.adult + itemsAmountGuests.kids) != itemsAmountGuests.totalSum())
                outputStr += ", "
        }

        if(itemsAmountGuests.babyes != 0){

            if(itemsAmountGuests.babyes == 1)
                outputStr += "1 младенец"
            else{

                if(itemsAmountGuests.babyes == 2 || itemsAmountGuests.babyes == 3 || itemsAmountGuests.babyes == 4)
                    outputStr += `${itemsAmountGuests.babyes} младенца`
                else
                    outputStr += `${itemsAmountGuests.babyes} младенцев`

            }
        }
    }

    else
        outputStr = $(target).attr("data-placeholder")

    return outputStr
}
function toStringComfort(target){
    let outputStr = ""

    if(itemsAmountComfort.totalSum() != 0){

        if(itemsAmountComfort.bedrooms != 0){

            if(itemsAmountComfort.bedrooms == 1)
                outputStr = "1 спальня"
            else{

                if(itemsAmountComfort.bedrooms == 2 || itemsAmountComfort.bedrooms == 3 || itemsAmountComfort.bedrooms == 4)
                    outputStr = `${itemsAmountComfort.bedrooms} спальни`
                else
                    outputStr = `${itemsAmountComfort.bedrooms} спален`

            }

            if(itemsAmountComfort.bedrooms != itemsAmountComfort.totalSum())
                outputStr += ", "
        }

        if(itemsAmountComfort.beds != 0){

            if(itemsAmountComfort.beds == 1)
                outputStr += "1 кровать"
            else{

                if(itemsAmountComfort.beds == 2 || itemsAmountComfort.beds == 3 || itemsAmountComfort.beds == 4)
                    outputStr += `${itemsAmountComfort.beds} кровати`
                else
                    outputStr += `${itemsAmountComfort.beds} кроватей`

            }

            if((itemsAmountComfort.bedrooms + itemsAmountComfort.beds) != itemsAmountComfort.totalSum())
                outputStr += ", "
        }

        if(itemsAmountComfort.baths != 0){

            if(itemsAmountComfort.baths == 1)
                outputStr += "1 ванная"
            else{

                if(itemsAmountComfort.baths == 2 || itemsAmountComfort.baths == 3 || itemsAmountComfort.baths == 4)
                    outputStr += `${itemsAmountComfort.baths} ванные`
                else
                    outputStr += `${itemsAmountComfort.baths} ванных`

            }
        }
    }
    else
        outputStr = $(target).attr("data-placeholder")

    return outputStr
}

$(".dropdown-input__expnd-more").on("click", function() {

    let isOpened = $(this)
                   .parent()
                   .next()
                   .css("display") == "none" 

    let borderColor = isOpened ? "#8F90A0" : "#C7C7CF"

    $(this)
    .parent()
    .next()
    .slideToggle("fast")

    $(this)
    .prev()
    .css("border-color", borderColor)

    $(this).css("border-color", borderColor)

})

$(".dropdown__inc").on("click", function(){
    let itemsAmount

    if($(this).parents(".dropdown").hasClass("dropdown_guests")){
        itemsAmount = itemsAmountGuests
    }
    else
        itemsAmount = itemsAmountComfort

    refreshItemsAmount(this)

    if(itemsAmount.totalSum() == 0 && $(this).parents(".dropdown").hasClass("dropdown_guests"))
        $(".dropdown__btns-clear").css("visibility", "visible")

    if(itemsAmount[$(this).parents("li").attr("data-item")] == 0)
        $(this)
        .siblings(".dropdown__dec")
        .css("opacity", "1")

    itemsAmount[$(this).parents("li").attr("data-item")]++

    $(this)
    .prev()
    .html(itemsAmount[$(this).parents("li").attr("data-item")])

    showItemsAmount(this)
})

$(".dropdown__dec").on("click", function(){
    let itemsAmount = itemsAmountComfort

    if($(this).parents(".dropdown").hasClass("dropdown_guests"))
        itemsAmount = itemsAmountGuests
    else
        itemsAmount = itemsAmountComfort

    refreshItemsAmount(this)

    if(itemsAmount[$(this).parents("li").attr("data-item")] == 1)
        $(this).css("opacity", "0.38")

    if(itemsAmount[$(this).parents("li").attr("data-item")] != 0){

        itemsAmount[$(this).parents("li").attr("data-item")]--

        $(this)
        .next()
        .html(itemsAmount[$(this).parents("li").attr("data-item")])
        
        if(itemsAmount.totalSum() == 0 && $(this).parents(".dropdown").hasClass("dropdown_guests"))
            $(".dropdown__btns-clear").css("visibility", "hidden")

    }

    showItemsAmount(this)
})

$(".dropdown__btns-clear").on("click", function(){
    let itemsAmount
    if($(this).parents(".dropdown").hasClass("dropdown_guests"))
        itemsAmount = itemsAmountGuests
    else
        itemsAmount = itemsAmountComfort

    $(this)
    .parents(".dropdown__menu")
    .find(".dropdown__count")
    .html("0")

    itemsAmount.resetToZero()

    $(this)
    .parents(".dropdown__menu")
    .find(".dropdown__dec")
    .css("opacity", "0.38")

    $(this).css("visibility", "hidden")

    let defaultPlaceholder = $(this)
                             .parents(".dropdown")
                             .find(".dropdown-input__inp")
                             .attr("data-placeholder")

    $(this)
    .parents(".dropdown")
    .find(".dropdown-input__inp")
    .attr("placeholder", defaultPlaceholder)
})

$(".dropdown__btns-accept").on("click", function(){
    $(this)
    .parents(".dropdown__menu")
    .slideToggle("fast")
    .prev()
    .children()
    .css("border-color", "#C7C7CF")
})