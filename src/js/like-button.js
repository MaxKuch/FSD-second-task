import * as $ from "jquery"
$('.like-button').click(function(){
    let likesCount =  +$(this).find('.like-button__count').text()
    let isLiked = $(this).attr('data-liked') == 'true'
    if(isLiked){
        likesCount--
        $(this).attr('data-liked', 'false')
    }
    else{
        likesCount++
        isLiked = true
        $(this).attr('data-liked', 'true')
    }
    let iconState = isLiked ? 'favorite_border' : 'favorite'

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