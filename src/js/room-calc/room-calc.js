import * as $ from "jquery"
import myDatepicker2 from './../date-dropdown'
import RoomCalc from './room-calc-class'

const roomCalc888 = new RoomCalc('888', 9990, 2179, 300)

myDatepicker2.acceptBtn.click(() => {
    if(myDatepicker2.isSelected){
        let daysAmount = (myDatepicker2.instance.selectedDates[1].getTime() - myDatepicker2.instance.selectedDates[0].getTime()) / 86400000
        roomCalc888.daysAmount = daysAmount
        roomCalc888.refreshValues()
    }
    else
        roomCalc888.clear()
})