$(function() {

		$(document).ready(function(){
	  $(".slider").owlCarousel({
	  	items: 1,
	  	autoplay: true,
	  	animateIn: 'fadeIn',
	  	animateOut: 'fadeOut',
	  	autoplayTimeout: 3500,
	  	loop: true
	  });
	});

		$(document).ready(function(){
	  $(".brand-slider-carousel").owlCarousel({
	  	nav:true,
	  	navText: ['<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>'],
	  	loop: true,
	  	autoWidth:true,
	  	margin: 30
	  	// responsiveClass:true,
	  	/*responsive: {
	  		1400 : {
	  			items: 6
	  		},
	  		1200 : {
	  			items: 4
	  		},
	  		800 : {
	  			items: 3
	  		},
	  		400: {
	  			items: 3
	  		}
	  	}*/
	  });
	});


		
		ymaps.ready(function () {
			var myMap, billionare, billionareLab, billionareLuxe, poul;  
      myMap = new ymaps.Map("shops-map", {
            center: [55.034198, 82.916037],
            zoom: 13,
            controls: ["zoomControl","geolocationControl","trafficControl"]
        });
    billionare = new ymaps.Placemark([55.039770, 82.915543], { hintContent: 'Бутик Billionare', balloonContentHeader: 'Billionare, Trend_i', balloonContent: 'Крылова, 4', balloonContentFooter: 'тел. 217-33-70'});
    billionareLab = new ymaps.Placemark([55.052072, 82.915327], { hintContent: 'Бутик Billionare Lab', balloonContentHeader: 'Billionare Lab', balloonContent: 'Красный пр-т 92, ТЦ Океан', balloonContentFooter: 'тел. 8-913-938-33-41'});
    billionareLuxe = new ymaps.Placemark([55.034198, 82.916037], { hintContent: 'Бутик Billionare Luxe', balloonContentHeader: 'Billionare Luxe', balloonContent: 'Советская, 26', balloonContentFooter: 'тел. 220-90-20'});
    poul = new ymaps.Placemark([55.026107, 82.917842], { hintContent: 'Бутик Poul & Shark', balloonContentHeader: 'Poul & Shark', balloonContent: 'Советская, 12', balloonContentFooter: ''});
    myMap.geoObjects.add(billionare);
    myMap.geoObjects.add(billionareLab);
    myMap.geoObjects.add(billionareLuxe);
    myMap.geoObjects.add(poul);
		});

});
