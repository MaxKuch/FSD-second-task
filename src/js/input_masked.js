import * as $ from 'jquery'
import "@js/plugins/jquery.maskedinput.min.js"

$(".input_masked").mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ"})