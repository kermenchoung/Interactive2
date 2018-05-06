/*$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			
			
		}, 1000 );
	});

});*/
  $(function() {
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      $('#tbutton-2').on('click',function() {
        
        $('#button-4').addClass(animationName).one(animationend,function() {
          $(this).removeClass(animationName);
        });

      });

    });