import * as $ from 'jquery'

export default class Dropdown{
    constructor(id, defaultPlaceholder, itemsArray) 
    {
        this.defaultPlaceholder = defaultPlaceholder
        this.id = id
        this.instance = $(id)
        this.input = this.instance.find('.input-with-btn__inp')
        this.menu = this.instance.find('.dropdown__menu')
        this.openBtn = this.instance.find(".dropdown-input__btn")
        this.incBtn = this.instance.find(".dropdown__inc")
        this.decBtn = this.instance.find(".dropdown__dec")
        this.acceptBtn = this.instance.find(".dropdown__btns-accept")
        this.clearBtn = this.instance.find(".dropdown__btns-clear")
        this.itemsArray = itemsArray
        this.itemsArray.itemsAmount = function(){
            let itemsAmount = 0
            for(let item in this){
                if(typeof this[item] != "function")
                    itemsAmount += this[item].value
            }
            return itemsAmount
        }
        Object.defineProperty(itemsArray, "itemsAmount", {
            enumerable: false
        })
        this.isOpened = false
    }

    itemsAmount() {
        let itemsAmount = 0
        for(let item in this.itemsArray)
            itemsAmount += item.value
        return itemsAmount
    }

    resetToZero() {
        for(let item in this.itemsArray){
            this.itemsArray[item].value = 0
        }
        
        this.instance
        .find(".dropdown__count")
        .html("0")

        this.decBtn.removeClass('active')

        this.clearBtn.removeClass('active')

        this.input.attr("placeholder", this.defaultPlaceholder)
    }

    truncate(string, maxLen){
        if(string.length > maxLen){
            string = string.slice(0, maxLen) + "…"
        }
        return string
    }

    showItemsAmount(target){
            this.input
            .attr("placeholder", toStringGuests($(target).parents(".dropdown")
            .find(".input")))
    }

    toStringGuests(){
        let outputStr = ""
        if(this.itemsArray.itemsAmount() != 0) {
            for(let item in this.itemsArray){
                if(this.itemsArray[item].value != 0)
                    outputStr += this.itemsArray[item].value > 1 ? ` ${this.itemsArray[item].value} ${this.itemsArray[item].plural},` : ` ${this.itemsArray[item].value} ${this.itemsArray[item].singular},`
            }
            return this.truncate(outputStr.substr(0, outputStr.length - 1), 30) 
        }
        return this.defaultPlaceholder
    }

    refreshItemsAmount(target){
        this.instance
        .find(".dropdown__list")
        .children("li")
        .each((indx, element) => {
            $(element).find(".dropdown__count").html(itemsArray[$(element).attr("data-item")].value)
        })  
    }
    
    toggle(){
            
        this.menu
        .slideToggle("fast")

        this.openBtn
        .prev()
        .toggleClass("input-with-btn__inp_dark-shade-50-border")

        this.openBtn
        .prev()
        .toggleClass("input-with-btn__inp_dark-shade-25-border")

        this.openBtn
        .toggleClass("input-with-btn__inp_dark-shade-50-border")

        this.openBtn
        .prev()
        .toggleClass("input-with-btn__inp_dark-shade-25-border")

    }

    inc(target){
        this.itemsArray[target].value++
        $(`#${target}Inc`).prev().html(this.itemsArray[target].value)
        if(this.itemsArray[target].value == 1)
            $(`#${target}Inc`).prev().prev().addClass('active')

        if(this.itemsArray.itemsAmount() == 1)
            this.clearBtn.addClass('active')
        this.input.attr("placeholder", this.toStringGuests())
    }

    dec(target){
        if(this.itemsArray[target].value > 0){
            this.itemsArray[target].value--
            $(`#${target}Dec`).next().html(this.itemsArray[target].value)
            if(this.itemsArray[target].value == 0)
                $(`#${target}Dec`).removeClass('active')

            if(this.itemsArray.itemsAmount() == 0)
                this.clearBtn.removeClass('active')

            this.input.attr("placeholder", this.toStringGuests())
        }
    }
}

