var top_menu_height = 0;
$('.carousel').parallax({
    imageSrc: './images/1.jpg',
    position: 'center bottom',
    speed: 0.2
});
$('#footer').parallax({
    imageSrc: './images/2.jpg',
    position: 'center center',
    speed: 0.2
});
jQuery(function($) {
		$(window).load( function() {
			$('.external-link').unbind('click');	
		});
		
        $(document).ready( function() {

        top_menu_height = $('.templatemo-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#templatemo-nav-bar', offset: top_menu_height + 10 });
		$('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#templatemo-top');
        });

        // scroll to specific id when click on menu
        $('.templatemo-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });

        // to stick navbar on top
        $('.templatemo-top-menu ').stickUp();

        // gallery category
        $('.templatemo-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
    });
});

// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}

 new WOW().init();

 var news = 6; // - количество отображаемых новостей

    $("#list1 > li:not(:lt("+news+")), #list2 > li:not(:lt("+news+")), #list3 > li:not(:lt("+news+"))").hide();

    $(".btn_loadmore").click(function (e){
      e.preventDefault();
      if( $(".product_list > li:eq("+news+")").is(":hidden") )
      {
        $(".product_list > li:hidden").slideDown();
      }
      else
      {
        $("#list1 > li:not(:lt("+news+")), #list2 > li:not(:lt("+news+")), #list3 > li:not(:lt("+news+"))").slideUp();
      }
    });


