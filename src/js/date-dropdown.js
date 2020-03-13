import * as $ from "jquery"
import Datepicker from "./datepicker.js"
import "air-datepicker/dist/js/datepicker.min"

let myDatepicker = new Datepicker('#date-dropdown', {
    nextHtml: '<i class = "material-icons purple">arrow_forward</i>',
    prevHtml: '<i class = "material-icons purple">arrow_back</i>',
    navTitles: {
        days: 'MM yyyy'
    },
    range: true,
    offset: 5,
    minDate: new Date(),
})

myDatepicker.parent.datepicker({
    onSelect: () => {myDatepicker.parseDate()},
    onShow: () => {
        console.log('1')
        myDatepicker.datepicker.toggleClass('hidden')
    },
    onHide: (dp, animationCompleted) => {
        if(animationCompleted)
            myDatepicker.datepicker.toggleClass('hidden')
        }
})
myDatepicker.toggleBtn.click(() => {
    myDatepicker.toggle()
})

myDatepicker.inputLeaving.click(() => {
    myDatepicker.toggle()
})
myDatepicker.inputComing.click(() => {
    myDatepicker.toggle()
})
$('.datepicker--clear').click(() => {
    myDatepicker.clear()
})

$('.datepicker--accept').click(() => {
    myDatepicker.toggle()
})

let myDatepicker2 = new Datepicker('#date-dropdown888', {
    nextHtml: '<i class = "material-icons purple">arrow_forward</i>',
    prevHtml: '<i class = "material-icons purple">arrow_back</i>',
    navTitles: {
        days: 'MM yyyy'
    },
    range: true,
    offset: 5,
    minDate: new Date(),
})
myDatepicker2.parent.datepicker({
    onSelect: () => {myDatepicker2.parseDate()},
    onShow: () => {
        console.log('1')
        myDatepicker2.datepicker.toggleClass('hidden')
    },
    onHide: (dp, animationCompleted) => {
        if(animationCompleted)
            myDatepicker2.datepicker.toggleClass('hidden')
        }
})
myDatepicker2.toggleBtn.click(() => {
    myDatepicker2.toggle()
})

myDatepicker2.inputLeaving.click(() => {
    myDatepicker2.toggle()
})
myDatepicker2.inputComing.click(() => {
    myDatepicker2.toggle()
})
$('.datepicker--clear').click(() => {
    myDatepicker2.clear()
})

$('.datepicker--accept').click(() => {
    myDatepicker2.toggle()
})

let myDatepicker3 = new Datepicker('#ui-kit-cards__date-dropdown', {
    nextHtml: '<i class = "material-icons purple">arrow_forward</i>',
    prevHtml: '<i class = "material-icons purple">arrow_back</i>',
    navTitles: {
        days: 'MM yyyy'
    },
    range: true,
    offset: 5,
    minDate: new Date(),
})
myDatepicker3.parent.datepicker({
    onSelect: () => {myDatepicker3.parseDate()},
    onShow: () => {
        console.log('1')
        myDatepicker3.datepicker.toggleClass('hidden')
    },
    onHide: (dp, animationCompleted) => {
        if(animationCompleted)
            myDatepicker3.datepicker.toggleClass('hidden')
        }
})
myDatepicker3.toggleBtn.click(() => {
    myDatepicker3.toggle()
})

myDatepicker3.inputLeaving.click(() => {
    myDatepicker3.toggle()
})
myDatepicker3.inputComing.click(() => {
    myDatepicker3.toggle()
})
$('.datepicker--clear').click(() => {
    console.log("1")
    myDatepicker3.clear()
})

$('.datepicker--accept').click(() => {
    myDatepicker3.toggle()
})