$(document).ready(function () {
    $('#right').on('click', function () {
        anime({
            targets: '#card-1, #card-2',
            left: '200px',
            easing: 'easeInOutQuad'
        });
    });

    $('#left').on('click', function () {
        anime({
            targets: '#card-1, #card-2',
            left: '-200px',
            easing: 'easeInOutQuad'
        });
    })



});