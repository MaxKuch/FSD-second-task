import * as $ from "jquery"
import "@js/plugins/jquery-ui.min.js"

$( function( ) {
    $( "#slider-range" ).slider({
      range: true,
      min: 500,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).html(splitNumber(ui.values[ 0 ]) + "₽" + " - " + splitNumber(ui.values[ 1 ]) + "₽" );
      }
    });
    $( "#amount" ).html( splitNumber($( "#slider-range" ).slider( "values", 0 ))+ "₽" +
    " - " + splitNumber($( "#slider-range" ).slider( "values", 1 )) + "₽");
  } );

  function splitNumber(num){
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