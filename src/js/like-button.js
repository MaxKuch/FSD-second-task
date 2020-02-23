import * as $ from "jquery"
let isLiked = false
$('.like-button').click(function(){

    let likesCount =  +$(this).find('.like-button__count').text()
    
    let iconState = isLiked ? 'favorite_border' : 'favorite'

    if(isLiked){
        likesCount--
        isLiked = false
    }
    else{
        likesCount++
        isLiked = true
    }

    $(this).find('.like-button__count').html(likesCount)

    $(this)
    .toggleClass('dark-shade-25-bg')
    .toggleClass('gradient-purple-bg')
    .find('.like-button__icon')
    .toggleClass('dark-shade-25')
    .toggleClass('purple')
    .html(iconState)
    .next()
    .toggleClass('dark-shade-25')
    .toggleClass('purple')
})