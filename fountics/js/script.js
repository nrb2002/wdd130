/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const openButton = document.getElementsByClassName('open')[0]
const closeButton = document.getElementsByClassName('close')[0]


toggleButton.addEventListener('click', () => {
    openButton.classList.toggle('active')
} )


$(document).ready(function(){
    $(window).bind('scroll', function(){
        var gap = 80;
        if($(window).scrollTop > gap){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});