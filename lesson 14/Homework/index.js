let a, b;
$(document).ready(function () {
    $('.main_btna').on('click', function () {
        giveModal(a = 1);
    });
    $('.main_btn').on('click', function () {
        giveModal(a = 1);
    });
    $('.main_nav nav ul li:eq(1)').on('click', function () {
        giveModal(a = 1);
    });
    $('.modal button span').on('click', function () {
        giveModal(b = 1);
    });

    
    function giveModal() {
        $('.overlay').fadeToggle('slow');
        if (a == 1) {
            $('.modal').slideDown("slow");
            a = "";
        }
        if (b == 1) {
            $('.modal').slideUp("slow");
            b = "";
        }
    }
});