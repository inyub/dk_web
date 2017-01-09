// Not pretty but it works, help is appreciated, send to dkarsiko@gmail.com  
jQuery(document).ready(function($) {
        $('#myCarousel0').carousel('pause');

        //Handles the carousel thumbnails
       $('[id^=carousel-selector0-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel0').carousel(id);
        });
});
//1
  jQuery(document).ready(function($) {
        $('#myCarousel1').carousel('pause');
	  
        //Handles the carousel thumbnails
       $('[id^=carousel-selector1-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel1').carousel(id);
        });
});
//2
  jQuery(document).ready(function($) {
        $('#myCarousel2').carousel('pause');
        //Handles the carousel thumbnails
       $('[id^=carousel-selector2-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel2').carousel(id);
        });
});
//3
  jQuery(document).ready(function($) {
        $('#myCarousel3').carousel('pause');
        //Handles the carousel thumbnails
       $('[id^=carousel-selector3-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel3').carousel(id);
        });
});
//4
  jQuery(document).ready(function($) {
        $('#myCarousel4').carousel('pause');
        //Handles the carousel thumbnails
       $('[id^=carousel-selector4-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel4').carousel(id);
        });
});
//5
  jQuery(document).ready(function($) {
        $('#myCarousel5').carousel('pause');
        //Handles the carousel thumbnails
       $('[id^=carousel-selector5-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel5').carousel(id);
        });
});
//6
  jQuery(document).ready(function($) {
        $('#myCarousel6').carousel('pause');
        //Handles the carousel thumbnails
       $('[id^=carousel-selector6-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel6').carousel(id);
        });
});
  
//Pomo
jQuery(document).ready(function($) {
        $('#myCarouselPomo').carousel('pause');

        //Handles the carousel thumbnails
       $('[id^=carousel-selectorPomo-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarouselPomo').carousel(id);
        });
});


// Original Script by http://bootsnipp.com/aibrean

/*  jQuery(document).ready(function($) {
 
        $('#myCarousel2').carousel('pause');
 
        $('#carousel-text2').html($('#slide-content2-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector2-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel2').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel2').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number2');
                $('#carousel-text2').html($('#slide-content2-'+id).html());
        });
});


/*
  jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel('pause');
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});
*/