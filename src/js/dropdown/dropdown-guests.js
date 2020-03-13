import * as $ from 'jquery'
import Dropdown from "./dropdown.js"


const findRoomGuestsDropdown = new Dropdown('.search-rooms__dropdown-guests', "Сколько гостей", {
    findRoomAdults: {
        id: "findRoomAdults",
        singular: 'гость',
        plural: 'гостя',
        value: 0
    },
    findRoomKids: {
        id: "findRoomKids",
        singular: 'ребенок',
        plural: 'ребенка',
        value: 0
    },
    findRoomBabies: {
        id: "findRoomBabies",
        singular: 'младенец',
        plural: 'младенца',
        value: 0
    }
})

findRoomGuestsDropdown.openBtn.on("click", function() {
    findRoomGuestsDropdown.toggle()
})

$(`#${findRoomGuestsDropdown.itemsArray.findRoomAdults.id}Inc`).on("click", function(){
    findRoomGuestsDropdown.inc(`${findRoomGuestsDropdown.itemsArray.findRoomAdults.id}`)
})

$(`#${findRoomGuestsDropdown.itemsArray.findRoomKids.id}Inc`).on("click", function(){
    findRoomGuestsDropdown.inc(`${findRoomGuestsDropdown.itemsArray.findRoomKids.id}`)
})

$(`#${findRoomGuestsDropdown.itemsArray.findRoomBabies.id}Inc`).on("click", function(){
    findRoomGuestsDropdown.inc(`${findRoomGuestsDropdown.itemsArray.findRoomBabies.id}`)
})

$(`#${findRoomGuestsDropdown.itemsArray.findRoomAdults.id}Dec`).on("click", function(){
    findRoomGuestsDropdown.dec(`${findRoomGuestsDropdown.itemsArray.findRoomAdults.id}`)
})

$(`#${findRoomGuestsDropdown.itemsArray.findRoomKids.id}Dec`).on("click", function(){
    findRoomGuestsDropdown.dec(`${findRoomGuestsDropdown.itemsArray.findRoomKids.id}`)
})

$(`#${findRoomGuestsDropdown.itemsArray.findRoomBabies.id}Dec`).on("click", function(){
    findRoomGuestsDropdown.dec(`${findRoomGuestsDropdown.itemsArray.findRoomBabies.id}`)
})

findRoomGuestsDropdown.acceptBtn.on("click", function(){
    findRoomGuestsDropdown.toggle()
})


findRoomGuestsDropdown.clearBtn.on("click", function(){
    findRoomGuestsDropdown.resetToZero()
})

const roomCalcGuestsDropdown = new Dropdown('.room-calc__dropdown-guests', "Сколько гостей", {
    roomCalcAdults: {
        id: "roomCalcAdults",
        singular: 'гость',
        plural: 'гостя',
        value: 0
    },
    roomCalcKids: {
        id: "roomCalcKids",
        singular: 'ребенок',
        plural: 'ребенка',
        value: 0
    },
    roomCalcBabies: {
        id: "roomCalcBabies",
        singular: 'младенец',
        plural: 'младенца',
        value: 0
    }
})

roomCalcGuestsDropdown.openBtn.on("click", function() {
    roomCalcGuestsDropdown.toggle()
})

$(`#${roomCalcGuestsDropdown.itemsArray.roomCalcAdults.id}Inc`).on("click", function(){
    roomCalcGuestsDropdown.inc(`${roomCalcGuestsDropdown.itemsArray.roomCalcAdults.id}`)
})

$(`#${roomCalcGuestsDropdown.itemsArray.roomCalcKids.id}Inc`).on("click", function(){
    roomCalcGuestsDropdown.inc(`${roomCalcGuestsDropdown.itemsArray.roomCalcKids.id}`)
})

$(`#${roomCalcGuestsDropdown.itemsArray.roomCalcBabies.id}Inc`).on("click", function(){
    roomCalcGuestsDropdown.inc(`${roomCalcGuestsDropdown.itemsArray.roomCalcBabies.id}`)
})

$(`#${roomCalcGuestsDropdown.itemsArray.roomCalcAdults.id}Dec`).on("click", function(){
    roomCalcGuestsDropdown.dec(`${roomCalcGuestsDropdown.itemsArray.roomCalcAdults.id}`)
})

$(`#${roomCalcGuestsDropdown.itemsArray.roomCalcKids.id}Dec`).on("click", function(){
    roomCalcGuestsDropdown.dec(`${roomCalcGuestsDropdown.itemsArray.roomCalcKids.id}`)
})

$(`#${roomCalcGuestsDropdown.itemsArray.roomCalcBabies.id}Dec`).on("click", function(){
    roomCalcGuestsDropdown.dec(`${roomCalcGuestsDropdown.itemsArray.roomCalcBabies.id}`)
})

roomCalcGuestsDropdown.acceptBtn.on("click", function(){
    roomCalcGuestsDropdown.toggle()
})


roomCalcGuestsDropdown.clearBtn.on("click", function(){
    roomCalcGuestsDropdown.resetToZero()
})

