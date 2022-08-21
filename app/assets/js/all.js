$(document).ready(function () {
    $('.sm-menu').click(function(event){
        event.preventDefault();
        $('.sm-nav').stop().slideUp();
        $('.sm-nav').stop().slideToggle();
    })
})