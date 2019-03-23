$(document).ready(function () {
    $('.main_btna').on('click', function () {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown("slow");
    });
});

$('.modal button span').on('click', function(){
    $('.overlay').fadeToggle('slow');
    $('.modal').slideUp("slow");
})