$(function() {

    //selects the carousel dom node and calls the fucntion every 2 seconds
$(".carousel").carousel( { interval: 2000 } );
//add event click to carousel button
    $("#carouselButton").on("click",function(){
        //checks if the id has the specified child, 
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            //pause the carousel
            $(".carousel").carousel("pause");
            //then remove the class 'fa-pause' to all the carousel button's children
            $("#carouselButton").children("i").removeClass("fa-pause");
            // and then add a class back to those children called 'fa-play
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            // call the carousel method on my carousel dom node element
            $(".carousel").carousel("cycle");
            // same as previous block above just vice versa
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
}); 


$(function() {
    $('#reserveButton').on("click",function(){
        $('#reserveModal').modal('show')
        }
    )

})

$(function() {
    $('#loginButton').on("click",function(){
        $('#loginModal').modal('show')
        }
    )

})