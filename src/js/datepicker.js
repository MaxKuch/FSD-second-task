import * as $ from "jquery"
export default class Datepicker{
    constructor(id, preferences){
        this.isOpened = false
        this.parent = $(id)
        this.inputComing = this.parent.find('input.date-dropdown__input--coming')
        this.inputLeaving = this.parent.find('input.date-dropdown__input--leaving')
        this.toggleBtn = this.parent.find('button')
        this.instance = this.parent.datepicker(preferences).data('datepicker')
        this.datepicker = this.parent.find('.datepicker-inline')
        this.datepicker.addClass('hidden')
        $(".datepicker--content").after('<div class = "datepicker--control"><button class = "datepicker--clear label dark-shade-50">Очистить</button><button class = "datepicker--accept label purple">Применить</button></div>')
    }
    show(){
        this.datepicker.removeClass('hidden')
        this.datepicker.addClass('active')
        this.isOpened = true
    }
    hide(){
        setTimeout(() => {this.datepicker.addClass('hidden')}, 200)
        this.datepicker.removeClass('active')
        this.isOpened = false
    }
    toggle(){
        if(!this.isOpened)
            this.show()
        else
            this.hide()
    }
    clear(){
        this.instance.clear()
        this.inputLeaving.val('')
        this.inputComing.val('')
    }
    parseDate(){
        if(this.instance.selectedDates[0]){
            let comingDay = this.instance.selectedDates[0].getDate() > 9 ? this.instance.selectedDates[0].getDate() : ('0' + this.instance.selectedDates[0].getDate())
            let comingMonth = this.instance.selectedDates[0].getMonth() > 9 ? this.instance.selectedDates[0].getMonth() : ('0' + this.instance.selectedDates[0].getMonth())
            this.inputComing.val([comingDay, comingMonth, this.instance.selectedDates[0].getFullYear()].join('.'))
        }
        if(this.instance.selectedDates[1]){
            let leavingDay = this.instance.selectedDates[1].getDate() > 9 ? this.instance.selectedDates[1].getDate() : ('0' + this.instance.selectedDates[1].getDate())
            let leavingMonth = this.instance.selectedDates[1].getMonth() > 9 ? this.instance.selectedDates[1].getMonth() : ('0' + this.instance.selectedDates[1].getMonth())
            this.inputLeaving.val([leavingDay, leavingMonth, this.instance.selectedDates[1].getFullYear()].join('.'))
        }
    }
}