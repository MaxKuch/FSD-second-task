import * as $ from 'jquery'

$('.expandable-checkbox-list__btn').click(function(){
    let arrowState = $(this).parent().next().css("display") == "none" ? "expand_less" : "expand_more"
    $(this).children().html(arrowState)
    $(this).parent().next().slideToggle('fast')
})