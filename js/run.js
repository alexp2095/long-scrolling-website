$(document).ready(function(){

var fromLeft = 0

$(window).scroll(function(){

    fromLeft = $(window).scrollLeft();

    if (fromLeft >= 0 ){

        $("#headline").css({"left" : 150 + fromLeft * 1 + "px"});
          $("#headline2").css({"left" : 150 + fromLeft * 1 + "px"});
            $("#headline3").css({"left" : 150 + fromLeft * 1 + "px"});

    }else {


}


});


});
