import * as $ from "jquery"
export default class RoomCalc{
    constructor(roomNum, roomCost, discount = 0, collectExtraServices = 0){
        this.id = `№${roomNum}`
        this.instance = $(`#${this.id}`)
        this.daysAmount = 0
        this._roomCost = roomCost
        this._discount = discount
        this._collectExtraServices = collectExtraServices
        this._costForDays = 0
        this._daysElem = $(`#${roomNum}-room-calc_days`)
        this._summary = 0
        this._summaryElem = $(`#${roomNum}-room-calc_summary`)
        this._discountElem = $(`#${roomNum}-room-calc_discount`)
        this._collectExtraServicesElem = $(`#${roomNum}-room-calc_collect-extra-services`)
        this._costForDaysElem = $(`#${roomNum}-room-calc_cost-for-days`)
        this.refreshValues()
    }

    refreshValues(){
        this.calcCostForDays()
        this.calcSummary()
        this.displayDays(this._daysElem, this.daysAmount)
        this.displayValue(this._discountElem, this._discount)
        this.displayValue(this._collectExtraServicesElem, this._collectExtraServices)
        this.displayValue(this._costForDaysElem, this._costForDays)
        this.displayValue(this._summaryElem, this._summary)
    }

    calcCostForDays(){
        this._costForDays = this._roomCost * this.daysAmount
    }

    calcSummary(){
        this._summary = this._costForDays == 0 ? 0 : this._costForDays - this._discount + this._collectExtraServices
    }

    displayValue(target, value){
        target.html(`${this.splitNumber(value)}₽`)
    }
    displayDays(target, value){
        target.html(this.splitNumber(value))
    }

    splitNumber(num){
        let [...arrNum] = num.toString()
        let outputString = []
        if(arrNum.length < 4)
          return num
        for(let i = arrNum.length - 1; i >= 0; i-=3){
          for(let j = i; j >= 0 && j > i - 3; j--){
            outputString.unshift(arrNum[j])
          }
          outputString.unshift(' ')
        }
        return  outputString.join('').trim()
    }
}