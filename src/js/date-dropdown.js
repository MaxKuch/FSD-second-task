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
    onSelect: () => {
        myDatepicker.parseDate()
        myDatepicker.isSelected = true
    },
    onShow: () => {
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
myDatepicker.clearBtn.click(() => {
    myDatepicker.clear()
})

myDatepicker.acceptBtn.click(() => {
    myDatepicker.toggle()
})

let myDatepicker2 = new Datepicker('#date-dropdown888', {
    nextHtml: '<i class = "material-icons purple">arrow_forward</i>',
    prevHtml: '<i class = "material-icons purple">arrow_back</i>',
    navTitles: {
        days: 'MM yyyy'
    },
    toggleSelected: false,
    range: true,
    offset: 5,
    minDate: new Date(),
})
myDatepicker2.parent.datepicker({
    onSelect: () => {
            myDatepicker2.parseDate()
            myDatepicker2.isSelected = true
    },
    onShow: () => {
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

myDatepicker2.clearBtn.click(() => {
    myDatepicker2.clear()
})

myDatepicker2.acceptBtn.click(() => {
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
    onSelect: () => {
            myDatepicker3.parseDate()
            myDatepicker3.isSelected = true
    },
    onShow: () => {
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
myDatepicker3.clearBtn.click(() => {
    myDatepicker3.clear()
})

myDatepicker3.acceptBtn.click(() => {
    myDatepicker3.toggle()
})

export default myDatepicker2