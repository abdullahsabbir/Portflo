$(function()
{
    //Navbar Fix
    
    $(window).on('scroll', function()
    {
        if($(this).scrollTop() > 0)
        {
            $('.custom_nav').css({'background': 'rgba(0,0,0,.9)'});
        }
        else
        {
            $('.custom_nav').css({'background': 'transparent'});
        } 
    });
    
    //Slick Slider
    
    $('.services_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.services_prev_arrow',
        nextArrow: '.services_next_arrow',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    
});