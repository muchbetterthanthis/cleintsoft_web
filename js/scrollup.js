var lastScrollPosition = 0; 

$('#scroll-up').click( function(){
    if ( $(document).scrollTop() > 0 ) {
        $('html').animate({scrollTop:0},1000);
        $('body').animate({scrollTop:0},1000);
        lastScrollPosition = $(document).scrollTop();
    } else {
        $('html').animate({scrollTop:lastScrollPosition},1000);
        $('body').animate({scrollTop:lastScrollPosition},1000);
    }   
});

$(document).scroll( function() {
    if ( $(document).scrollTop() > 0 ) {
        $('#scroll-up').fadeIn();
        $('#scroll-up').text('Above');
    } else {
        $('#scroll-up').text('Below');
    }
});